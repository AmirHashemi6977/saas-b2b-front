import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["fa", "en", "hy"] as const,

  // Used when no locale matches
  defaultLocale: "fa",
});
