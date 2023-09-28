import { Grid } from '@mui/material';
import { FC } from 'react';
import Coin from './Coin';
import Controls from './Controls';

const CoinFlip: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Coin />
      </Grid>
      <Grid item xs={12}>
        <Controls />
      </Grid>
    </Grid>
  );
};

export { CoinFlip };
