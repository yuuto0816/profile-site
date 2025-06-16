import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Headerをインポート
import Footer from "@/components/Footer"; // Footerをインポート

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A portfolio site created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header /> {/* Headerをここに配置 */}
          <main className="flex-grow">
            {children} {/* ここに各ページの中身が表示される */}
          </main>
          <Footer /> {/* Footerをここに配置 */}
        </div>
      </body>
    </html>
  );
}