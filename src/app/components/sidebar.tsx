"use client";

import { useTranslations } from "next-intl";
import { Link } from "i18n/navigation";

export default function Sidebar() {
  const tHomePage = useTranslations("HomePage");

  return (
    <aside className="w-64 bg-white border-r shadow-sm p-4 hidden md:block">
      <nav className="space-y-3">
        <Link
          href="/"
          className="block text-gray-700 hover:text-blue-600 font-medium transition"
        >
          {tHomePage("dashboard")}
        </Link>
        <Link
          href="/settings"
          className="block text-gray-700 hover:text-blue-600 font-medium transition"
        >
          {tHomePage("settings")}
        </Link>
      </nav>
    </aside>
  );
}
