import { Components, CssVarsTheme, Theme } from '@mui/material';
import { blue } from '@mui/material/colors';

export const componentStyledOverride: Components<
  Omit<Theme, 'components' | 'palette'> & CssVarsTheme
> = {
  MuiButton: { styleOverrides: { root: { borderRadius: 50, height: 40 } } },
  MuiTextField: {
    defaultProps: {
      variant: 'outlined',
      sx: { '& fieldset': { border: 'none' } },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: (props) => ({
        borderRadius: 25,
        minHeight: props.multiline ? 'auto' : 40,
        border: `1px solid ${blue[200]}`,
        textAlign: 'center',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
      }),
    },
    defaultProps: {
      sx: { '& fieldset': { border: 'none' } },
    },
  },
};
