import "./globals.css";

export const metadata = {
  title: "COOKIE — Denim, Done Differently.",
  description:
    "Cookie creates easy-to-wear denim with considered fits, everyday comfort and a little personality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}