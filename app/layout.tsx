import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const customFont = localFont({
  src: "../public/TXlefX7W8sjgaFnFk9lqJhsRco.woff2",
  variable: "--font-custom",
  display: "swap",
});

const paragraphFont = localFont({
  src: "../public/6IN5WOLRCYP4G4MOCOHOMXNON6Q7MDAR.woff2",
  variable: "--font-paragraph",
  display: "swap",
});

export const metadata: Metadata = {
  title: "mi.gineco",
  description: "Tu embarazo, fácil y conectado",
  icons: {
    icon: "/favico.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${customFont.variable} ${paragraphFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
