import { Grid } from '@mui/material';
import { FC, useState } from 'react';
import Coin from './Coin';
import Controls from './Controls';

const CoinFlip: FC = () => {
  const [side, setSide] = useState('heads');

  const flipCoin = () => {
    // Generate a random number between 0 and 1
    const random = Math.random();

    // Set the side state based on the random number
    if (random < 0.5) {
      setSide('heads');
    } else {
      setSide('tails');
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Coin side={side} />
      </Grid>
      <Grid item xs={12}>
        <Controls flipCoin={flipCoin} />
      </Grid>
    </Grid>
  );
};

export { CoinFlip };
