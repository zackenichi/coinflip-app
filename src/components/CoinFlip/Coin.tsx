import { Grid, Typography } from '@mui/material';
import { FC } from 'react';

interface CoinProps {
  content: string[];
  side: number;
  isSpinning?: boolean;
}

const Coin: FC<CoinProps> = ({ content, side, isSpinning }) => {
  return (
    <Grid
      className={isSpinning ? 'spinning' : ''}
      container
      sx={{
        background: side === 0 ? '#2a9d8f' : '#f4a261',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        textAlign: 'center',
        transition: 'transform 1s ease-in',
        transformStyle: 'preserve-3d',
      }}
    >
      <Grid item xs={12} sx={{ margin: 'auto', textAlign: 'center' }}>
        <Typography sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
          {content[side]}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Coin;
