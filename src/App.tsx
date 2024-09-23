import { AppRouter } from '@routes';
import './translations/i18n';
import { ThemeProvider } from '@themes';
import { CssBaseline } from '@mui/material';
import { StoreProvider } from '@reducers';

export default function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <CssBaseline></CssBaseline>
        <AppRouter></AppRouter>
      </ThemeProvider>
    </StoreProvider>
  );
}
