import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#A51DFF',
    },
    secondary: {
      main: '#AC8BB9',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#F590F9',
    },
    secondary: {
      main: '#A064FF',
    },
  },
});
