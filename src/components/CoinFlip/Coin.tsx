import { Grid, Typography } from '@mui/material';
import { FC } from 'react';

interface CoinProps {
  side: string;
}

const Coin: FC<CoinProps> = ({ side }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>{side}</Typography>
      </Grid>
    </Grid>
  );
};

export default Coin;
