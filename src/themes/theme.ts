import createTheme from '@mui/material/styles/createTheme';
import { componentStyledOverride } from './componentStyledOverride';

const theme = createTheme({
  components: componentStyledOverride,
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
