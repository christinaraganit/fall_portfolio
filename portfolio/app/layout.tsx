import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Favicon from "../public/favicon.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christina Raganit",
  description:
    "Christina is a Vancouver-based user experience designer knowledgeable in both visual design and frontend development.",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          property="og:title"
          content="Christina Raganit's portfolio website"
        />
        <meta
          property="og:description"
          content="Hi, Christina here! I'm a Vancouver-based UX designer with a background in software development."
        />
        <meta property="og:image" content="link-preview.png" />
      </Head>
      <body className={inter.className}>
        <Nav></Nav>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
