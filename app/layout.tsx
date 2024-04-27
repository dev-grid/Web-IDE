import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';
import React, { ReactNode } from 'react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IDE",
  description: "Online html, css, and javascript editor and compiler.",
  icons: {
    icon: "/logo.png"
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "hsl(222.2 84% 4.9%)",
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
}

interface RootLayoutProps {
  children: ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}