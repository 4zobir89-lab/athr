import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/locale-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "أثر | Athr — Where ideas become living systems",
  description:
    "A quiet digital sanctuary that transforms your thoughts, notes, and projects into intelligent, interconnected systems.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
