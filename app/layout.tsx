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
        <link rel="icon" href="/favicon.ico?v=2" />
        <title>Patrick's Portfolio | Software Developer</title>
        <meta name="title" content="Patrick's Portfolio | Software Developer" />
        <meta
          name="description"
          content="Software developer specializing in React, React Native, Java, and C#. Explore my projects and stay updated on the latest news. Let’s build something great together!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://patricksjoberg.vercel.app/" />
        <meta
          property="og:title"
          content="Patrick's Portfolio | Software Developer"
        />
        <meta
          property="og:description"
          content="Software developer specializing in React, React Native, Java, and C#. Explore my projects and stay updated on the latest news. Let’s build something great together!"
        />
        <meta
          property="og:image"
          content="https://frkkedednnwnuuhenogp.supabase.co/storage/v1/object/public/images/paz.jpeg?t=2025-01-05T22%3A18%3A42.560Z"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://patricksjoberg.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Patrick's Portfolio | Software Developer"
        />
        <meta
          property="twitter:description"
          content="Software developer specializing in React, React Native, Java, and C#. Explore my projects and stay updated on the latest news. Let’s build something great together!"
        />
        <meta
          property="twitter:image"
          content="https://frkkedednnwnuuhenogp.supabase.co/storage/v1/object/public/images/paz.jpeg?t=2025-01-05T22%3A18%3A42.560Z"
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
