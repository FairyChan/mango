import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COOKIE — Denim, Done Differently.",
  description:
    "Cookie creates easy-to-wear denim with considered fits, everyday comfort and a little personality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}