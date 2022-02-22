import { purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});

const DefaultTheme = (theme);

export default DefaultTheme;
