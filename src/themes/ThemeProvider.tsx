import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import theme from "./theme";
import { ThemeProviderProps } from "./interfaces";

export default function ThemeProvider({ children }: ThemeProviderProps) {
	return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
