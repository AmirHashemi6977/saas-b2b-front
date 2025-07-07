"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import { useTranslations } from "next-intl";
import { Link } from "i18n/navigation";
import LanguageSwitcher from "./languageSwitcher";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useThemeMode } from "../components/themeContex";

export default function Navbar() {
  const tHomePage = useTranslations("HomePage");
  const tLoginPage = useTranslations("LoginPage");
  const { mode, toggleTheme } = useThemeMode();

  return (
    <AppBar
      position="static"
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.main,
        boxShadow: 2,
      })}
    >
      <Toolbar
        sx={{ maxWidth: "1200px", width: "100%", margin: "0 auto", px: 2 }}
      >
        {/* Title */}
        <Typography variant="inherit" sx={{ color: "#2563eb", flexShrink: 0 }}>
          {tHomePage("title")}
        </Typography>

        {/* Search (hidden on small screens) */}
        <Box sx={{ flexGrow: 1, px: 2, display: { xs: "none", md: "block" } }}>
          <TextField
            size="small"
            fullWidth
            placeholder={tHomePage("search") || "Search..."}
            variant="outlined"
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton onClick={toggleTheme} color="inherit">
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>

        {/* Right Side Buttons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Settings Link */}
          <Link href="/settings" passHref legacyBehavior>
            <Button
              startIcon={<SettingsIcon />}
              sx={{ color: "gray", textTransform: "none" }}
            >
              {tHomePage("settings")}
            </Button>
          </Link>

          {/* Profile Link */}
          <Link href="/profile" passHref legacyBehavior>
            <Button
              startIcon={<AccountCircleIcon />}
              sx={{ color: "gray", textTransform: "none" }}
            >
              {tHomePage("profile")}
            </Button>
          </Link>

          {/* Login/Logout */}
          <Link href="/login" passHref legacyBehavior>
            <Button
              startIcon={<LoginIcon />}
              variant="outlined"
              sx={{
                color: "#2563eb",
                borderColor: "#2563eb",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#e0f2fe",
                  borderColor: "#2563eb",
                },
              }}
            >
              {tLoginPage("loginTitle")}
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
