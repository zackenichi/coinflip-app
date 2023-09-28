import { Box, Container } from '@mui/material';
import { FC } from 'react';
import { CoinFlip } from './components/CoinFlip';

const App: FC = () => {
  return (
    <Container maxWidth="md" data-testid="app-container">
      <Box
        sx={{
          flexGrow: 1,
          alignItems: 'center',
          flexDirection: 'column',
          p: 4,
        }}
      >
        <CoinFlip />
      </Box>
    </Container>
  );
};

export default App;
