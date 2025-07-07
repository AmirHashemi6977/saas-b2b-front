"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useTransition } from "react";
import {
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

const languages = [
  { code: "en", label: "English", emoji: "🇺🇸" },
  { code: "fa", label: "فارسی", emoji: "🇮🇷" },
  { code: "hy", label: "Հայերեն", emoji: "🇦🇲" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const currentLocale = pathname.split("/")[1];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLocale = (locale: string) => {
    handleClose();
    if (locale === currentLocale) return;

    startTransition(() => {
      const segments = pathname.split("/");
      segments[1] = locale;
      const newPathname = segments.join("/");
      router.replace(newPathname);
    });
  };

  return (
    <>
      <IconButton onClick={handleClick} color="inherit">
        <LanguageIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            selected={lang.code === currentLocale}
            onClick={() => changeLocale(lang.code)}
          >
            <ListItemIcon>{lang.emoji}</ListItemIcon>
            <Typography variant="button">{lang.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
