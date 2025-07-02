import { useTranslations } from "next-intl";

export default function LoginPage() {
  const t = useTranslations("LoginPage");

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          {t("loginTitle")}
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder={t("email")}
            className="border border-gray-300 rounded px-4 py-2"
          />
          <input
            type="password"
            placeholder={t("password")}
            className="border border-gray-300 rounded px-4 py-2"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {t("submit")}
          </button>
        </form>
      </div>
    </main>
  );
}
