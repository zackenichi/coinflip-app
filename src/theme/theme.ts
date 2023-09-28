import { createTheme } from '@mui/material/styles';

const componentOverrides = {};

const theme = createTheme({
  palette: {
    primary: {
      main: '#264653',
    },
    secondary: {
      main: '#2a9d8ff',
    },
    background: {
      default: '#e9c46a',
      paper: '#e9c46a',
    },
  },
  components: componentOverrides,
});

export { theme };
