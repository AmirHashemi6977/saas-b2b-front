import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const tHomePage = useTranslations("HomePage");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {tHomePage("welcomeMessage")}
          </h2>
          <p className="text-gray-600">{tHomePage("description")}</p>
        </main>
      </div>
    </div>
  );
}
