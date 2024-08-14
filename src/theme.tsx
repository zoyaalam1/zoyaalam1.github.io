import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#bc6c25',
    },
    text: {
      primary: '#556cd6',
      secondary: '#bc6c25',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
