import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata"; // Import metadata

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}