import "./globals.css";
import styles from "./page.module.css";
import type { Metadata } from "next";
import Link from "next/link";
import { localUbuntuFont, openSans } from "./fonts";

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
    <html lang="en" className={openSans.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header>
          <h1>
            <Link
              className={`${styles.homeLink} ${localUbuntuFont.className}`}
              href="/"
            >
              GLOBOMANTICS
            </Link>
          </h1>
          <h3>
            <Link className={styles.menuBarLinks} href="/about">
              About
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLinks} href="/blog">
              Blog
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLinks} href="/settings">
              Settings
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLinks} href="/conference">
              Conference
            </Link>
          </h3>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
