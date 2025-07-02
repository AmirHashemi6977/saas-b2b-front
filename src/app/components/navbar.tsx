"use client";

import Link from "next/link";
import LanguageSwitcher from "./languageSwitcher";
import { useLocale } from "next-intl"; // استفاده‌ی درست برای locale در App Router

const NavBar = () => {
  const locale = useLocale();

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">
        <Link href="/">MyApp</Link>
      </div>

      <div className="flex items-center gap-6">
        <Link href="/" className="text-gray-700 hover:text-blue-600">
          {locale === "fa" ? "خانه" : locale === "hy" ? "Գլխավոր" : "Home"}
        </Link>

        <Link href="/search" className="text-gray-700 hover:text-blue-600">
          {locale === "fa" ? "جستجو" : locale === "hy" ? "Որոնում" : "Search"}
        </Link>

        <Link href="/profile" className="text-gray-700 hover:text-blue-600">
          {locale === "fa" ? "پروفایل" : locale === "hy" ? "Պրոֆիլ" : "Profile"}
        </Link>

        {/* سوییچر زبان */}
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default NavBar;
