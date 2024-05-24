import { Inter } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "ITS System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
