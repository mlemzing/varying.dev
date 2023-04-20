import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className=" bg-rose-brown-400 bg-paper-texture min-h-screen text-rose-brown-800">
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </main>
  );
}
