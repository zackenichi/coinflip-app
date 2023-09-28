import { Grid, Snackbar } from '@mui/material';
import { FC, useState } from 'react';
import Coin from './Coin';
import Controls from './Controls';
import { MESSAGE_TIMEOUT } from '../../constants/constants';

const CoinFlip: FC = () => {
  const [side, setSide] = useState('heads');
  const [showMsg, setShowMsg] = useState(false);

  const flipCoin = () => {
    setShowMsg(true);
    // Generate a random number between 0 and 1
    const random = Math.random();

    // Set the side state based on the random number
    if (random < 0.5) {
      setSide('heads');
    } else {
      setSide('tails');
    }

    // Hide the message after 2 seconds
    setTimeout(() => {
      setShowMsg(false);
    }, MESSAGE_TIMEOUT);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Coin side={side} />
      </Grid>
      <Grid item xs={12}>
        <Controls flipCoin={flipCoin} />
      </Grid>
      <Snackbar
        open={showMsg}
        message="Flipping coin..."
        autoHideDuration={MESSAGE_TIMEOUT}
      />
    </Grid>
  );
};

export { CoinFlip };
