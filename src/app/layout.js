import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata"; // Import metadata
import Head from "next/head"; // Import Head from next/head

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
    
      </Head>
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}