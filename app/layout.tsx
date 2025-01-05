import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SupabaseProvider } from "./context/SupabaseContext";
import { GlobalProvider } from "./context/GlobalContext"; // Import GlobalProvider

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Patrick's Portfolio</title>
        <meta
          name="description"
          content="Patrick Sjöberg's portfolio built with Next.js and Supabase"
        />
        <meta
          name="keywords"
          content="Patrick Sjöberg, Portfolio, Next.js, Supabase, React, Tailwind CSS, Frontend, developer"
        />
        <meta name="author" content="Patrick Sjöberg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SupabaseProvider>
          <GlobalProvider>{children}</GlobalProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
