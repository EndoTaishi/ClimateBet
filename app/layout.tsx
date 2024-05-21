import type { Metadata } from "next";
import "./globals.css";
import { NotoSansJP } from "./ui/fonts";
import Header from "./ui/header";

export const metadata: Metadata = {
  title: "Climate Bet",
  description: "Climate Bet is a brand new platform for betting on climate change! How much is global warming affecting your area? Bet your predictions on such questions posed each day!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={NotoSansJP.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
