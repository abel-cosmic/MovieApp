"use client";
import "./../../app/globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { darkTheme } from "@/utils/theme/theme";

export const ThemeCustomProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
