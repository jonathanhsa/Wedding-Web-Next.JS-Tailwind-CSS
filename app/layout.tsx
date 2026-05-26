import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ButterflyCursor from "./components/ButterflyCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alya & Raka Wedding Invitation",
  description: "Undangan pernikahan digital Alya dan Raka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ButterflyCursor />
        {children}
      </body>
    </html>
  );
}
