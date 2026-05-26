import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "映你 inyo",
  description: "AI-powered cinematic self-expression platform",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
