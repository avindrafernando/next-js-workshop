import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Globomantics App",
  description: "Created by Surya Consulting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
