import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <header className="flex justify-center">
          <h1 className="w-max p-3 mb-3 text-7xl font-semibold bg-gradient-to-b from-cyan-200 to-blue-900 text-transparent bg-clip-text">Forge a Reason</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
