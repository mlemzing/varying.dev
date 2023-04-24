import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Xanh_Mono } from "next/font/google";

const xanhMono = Xanh_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-xanh",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${xanhMono.variable} bg-rose-brown-400 bg-paper-texture min-h-screen text-rose-brown-800`}
    >
      {/* <main className=" textblock min-h-screen text-rose-brown-800"> */}
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </main>
  );
}
