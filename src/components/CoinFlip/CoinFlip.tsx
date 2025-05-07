import {
  Box,
  Button,
  Grid,
  Modal,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { FC, useRef, useState } from 'react';
import Coin from './Coin';
import Controls from './Controls';
import { MESSAGE_TIMEOUT } from '../../constants/constants';

interface EditProps {
  open: boolean;
  onClose: () => void;
  content: string[];
  updateContent: (newContent: string[]) => void;
}

const Edit: FC<EditProps> = ({ content, onClose, open, updateContent }) => {
  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);

  const handleUpdate = () => {
    // Retrieve values from the input fields using refs
    const newContent = [
      input1Ref.current?.value || content[0],
      input2Ref.current?.value || content[1],
    ];
    updateContent(newContent);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: '#FFFFFF',
          borderRadius: 2,
          boxShadow: 24,
          p: 2,
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} textAlign="center">
            <Typography variant="h4">Edit Coin</Typography>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <TextField
              placeholder={content[0]}
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              inputRef={input1Ref}
            />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <TextField
              placeholder={content[1]}
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
              inputRef={input2Ref}
            />
          </Grid>
          <Grid item xs={6} textAlign="center">
            <Button
              variant="outlined"
              color="primary"
              onClick={onClose}
              sx={{ width: '100%' }}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6} textAlign="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpdate}
              sx={{ width: '100%' }}
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

const CoinFlip: FC = () => {
  // simple mechanism for tutorial
  // content for heads or tails

  const [content, setContent] = useState(['Heads', 'Tails']);

  // how about just the index
  const [side, setSide] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const [showEdit, setShowEdit] = useState(false);

  const flipCoin = () => {
    setIsSpinning(true);
    // Generate a random number between 0 and 1
    const random = Math.random();

    // Set the side state based on the random number
    if (random < 0.5) {
      setSide(0);
    } else {
      setSide(1);
    }

    // Hide the message after 2 seconds
    setTimeout(() => {
      setIsSpinning(false);
    }, MESSAGE_TIMEOUT);
  };

  const handleEditClick = () => {
    setShowEdit((prev) => !prev);
  };

  const handleChangeContent = (newContent: string[]) => {
    setContent(newContent);

    console.log('New content:', newContent);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Coin content={content} side={side} isSpinning={isSpinning} />
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Controls flipCoin={flipCoin} editCoin={handleEditClick} />
      </Grid>
      <Snackbar
        open={isSpinning}
        message="Flipping coin..."
        autoHideDuration={MESSAGE_TIMEOUT}
      />
      {showEdit && (
        <Edit
          open={showEdit}
          onClose={handleEditClick}
          content={content}
          updateContent={handleChangeContent}
        />
      )}
    </Grid>
  );
};

export { CoinFlip };
