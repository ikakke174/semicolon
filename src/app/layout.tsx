import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Semicolon Technologies | IT Consulting & Digital Solutions",
  description:
    "Semicolon Technologies provides IT consulting and digital solutions that help businesses solve technology problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-full flex flex-col font-inter`}>
        {children}
      </body>
    </html>
  );
}
