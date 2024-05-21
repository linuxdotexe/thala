import type { Metadata } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";

const inter = Barlow({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--barlow-extrabold",
});

export const metadata: Metadata = {
  title: "Thala Forge A Reason",
  description: "Thala is a reason",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
