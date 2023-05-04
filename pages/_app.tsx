import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Xanh_Mono, Playfair_Display, Public_Sans } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";

const xanhMono = Xanh_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-xanh",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});
export default function App({ Component, pageProps }: AppProps) {
  const [navbarShow, setNavbarShow] = useState<boolean>(false);
  useEffect(() => {
    console.log(navbarShow);
  }, [navbarShow]);
  return (
    <main
      className={`${xanhMono.variable} ${playfair.variable} ${publicSans.variable} bg-rose-brown-400 bg-paper-texture min-h-screen text-rose-brown-800 font-sans`}
    >
      <Head>
        <title>{`Ying's Portfolio`}</title>
      </Head>
      {/* <main className=" textblock min-h-screen text-rose-brown-800"> */}
      <Navbar visible={navbarShow} onClick={() => setNavbarShow(!navbarShow)} />
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </main>
  );
}
