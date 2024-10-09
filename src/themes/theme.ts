import createTheme from '@mui/material/styles/createTheme';
import { componentStyledOverride } from './componentStyledOverride';
import { amber, teal } from '@mui/material/colors';

const theme = createTheme({
  components: componentStyledOverride,
  typography: {
    button: {
      textTransform: 'none',
      color: 'black',
    },
  },
  palette: {
    primary: { main: teal[900] },
    secondary: { main: amber[700] },
  },
});

export default theme;
