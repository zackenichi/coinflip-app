import { Button } from '@mui/material';
import { FC } from 'react';

interface ControlsProps {
  flipCoin: () => void;
}

const Controls: FC<ControlsProps> = ({ flipCoin }) => {
  return (
    <>
      <Button variant="contained" onClick={flipCoin}>
        Flip
      </Button>
    </>
  );
};

export default Controls;
