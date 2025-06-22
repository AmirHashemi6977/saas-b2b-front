// pages/login.tsx
import Head from "next/head";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>ورود</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            ورود به حساب کاربری
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="email">
                ایمیل
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="password">
                رمز عبور
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              ورود
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
