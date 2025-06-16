import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import AppWrapper from "@/components/AppWrapper"; // 作成したAppWrapperをインポート
import "./globals.css";

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// メタ情報を復活させます！
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
    <html lang="ja" className={notoSerif.className}>
      <body>
        {/* AppWrapperでchildrenを囲む */}
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}