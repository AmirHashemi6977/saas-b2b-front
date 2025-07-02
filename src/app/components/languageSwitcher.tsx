"use client";

import { useRouter, usePathname } from "next/navigation"; // از next/navigation
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const changeLocale = (locale: string) => {
    startTransition(() => {
      const segments = pathname.split("/");
      segments[1] = locale; // فرض بر این است که locale در ابتدای مسیر است
      const newPathname = segments.join("/");
      router.replace(newPathname);
    });
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => changeLocale("fa")}>🇮🇷 فارسی</button>
      <button onClick={() => changeLocale("en")}>🇺🇸 English</button>
      <button onClick={() => changeLocale("hy")}>🇦🇲 Հայերեն</button>
    </div>
  );
}
