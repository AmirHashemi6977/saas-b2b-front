"use client";

import { ReactNode, useEffect, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "../theme/theme";
import { NextIntlClientProvider } from "next-intl";
import { useThemeMode } from "../components/themeContex"; // import context

interface ThemeProviderClientProps {
  children: ReactNode;
  locale: string;
}

export default function ThemeProviderClient({
  children,
  locale,
}: ThemeProviderClientProps) {
  const { mode } = useThemeMode(); // get the current theme mode from context

  // انتخاب تم بر اساس وضعیت mode
  const theme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NextIntlClientProvider locale={locale} messages={{}}>
        {children}
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
