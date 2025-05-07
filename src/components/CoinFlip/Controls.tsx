import { Button, Grid } from '@mui/material';
import { FC } from 'react';

interface ControlsProps {
  flipCoin: () => void;
  editCoin: () => void;
}

const Controls: FC<ControlsProps> = ({ flipCoin, editCoin }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} textAlign="center">
        <Button variant="outlined" onClick={editCoin} fullWidth>
          Edit
        </Button>
      </Grid>
      <Grid item xs={6} textAlign="center">
        <Button variant="contained" onClick={flipCoin} fullWidth>
          Flip
        </Button>
      </Grid>
    </Grid>
  );
};

export default Controls;
