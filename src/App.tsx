import { Box, Container } from '@mui/material';
import { FC } from 'react';
import { CoinFlip } from './components/CoinFlip';

const App: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Set min-height to 100vh for vertical centering
      }}
    >
      <Container maxWidth="md" data-testid="app-container">
        <Box
          sx={{
            flexGrow: 1,
            p: 4,
          }}
        >
          <CoinFlip />
        </Box>
      </Container>
    </Box>
  );
};

export default App;
