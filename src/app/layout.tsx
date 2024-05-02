import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BudgetBot MA",
  description:
    "I'm an AI assistant trained to analyze the finance law of Morocco from the years 2020 to 2024.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex flex-col flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
