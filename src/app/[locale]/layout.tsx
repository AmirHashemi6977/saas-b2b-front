import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "i18n/routing";
import "../globals.css";
import ThemeProviderClient from "../components/themeProviderClient";
import { ThemeContextProvider } from "../components/themeContex";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  console.log("locale", locale);
  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <body>
        <ThemeContextProvider>
          <ThemeProviderClient locale={locale}>{children}</ThemeProviderClient>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
