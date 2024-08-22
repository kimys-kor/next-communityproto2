import { Inter } from "next/font/google";
import "./globals.css";

import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./components/providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import Headers from "./components/layouts/headers/Headers";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import ScrollButtons from "./components/ScrollButtons";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "꽁머니팡",
  description: "라이브스코어 라이브스포츠 라이브중계",
};

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-pretendard`}>
        <main>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Headers></Headers>

          <div className="pt-28 md:pt-32 min-h-[100vh]">{children}</div>

          <Footer></Footer>
        </main>

        <ScrollButtons />
      </body>
    </html>
  );
}
