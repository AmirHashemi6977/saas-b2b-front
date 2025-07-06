"use client";

import { useTranslations } from "next-intl";
import { Link } from "i18n/navigation";
import LanguageSwitcher from "./languageSwitcher";

export default function Navbar() {
  const tHomePage = useTranslations("HomePage");
  const tLoginPage = useTranslations("LoginPage");

  return (
    <nav
      className="bg-amber-500 
    shadow-md border-b"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Title */}
        <div className="text-xl font-semibold text-blue-600">
          {tHomePage("title")}
        </div>

        {/* Search Box (optional future input) */}
        <div className="hidden md:block flex-1 px-4">
          <input
            type="text"
            placeholder={tHomePage("search") || "Search..."}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Right Side: Buttons */}
        <div className="flex items-center space-x-4">
          {/* Change Language */}
          <LanguageSwitcher />

          {/* Settings */}
          <Link
            href="/settings"
            className="text-gray-600 hover:text-blue-600 transition text-sm"
          >
            ⚙️ {tHomePage("settings")}
          </Link>

          {/* Profile */}
          <Link
            href="/profile"
            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition"
          >
            <span>👤</span>
            <span>{tHomePage("profile")}</span>
          </Link>

          {/* Login / Logout */}
          <Link
            href="/login"
            className="text-blue-500 hover:text-blue-700 text-sm border border-blue-500 px-3 py-1 rounded transition"
          >
            {tLoginPage("loginTitle")}
          </Link>
        </div>
      </div>
    </nav>
  );
}
