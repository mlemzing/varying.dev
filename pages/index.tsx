import { Xanh_Mono } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

const xanhMono = Xanh_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-xanh",
});
export default function Home() {
  const headerText = "ng - Software - Graphics - Design - Yi";

  const aboutRef = useRef<HTMLDivElement>(null);
  const scrollToAbout = () => {
    if (aboutRef && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.2, scale: 5 }}
      className="flex flex-col items-center justify-between"
    >
      <div className="h-screen w-screen flex flex-col items-center text-rose-brown-800">
        <div className="font-mono h-2/3 font-semi flex overflow-hidden w-full">
          <div className="flex items-center justify-center animate-spin-slow w-full">
            {headerText
              .toUpperCase()
              .split("")
              .map((char, index) => (
                <div
                  key={index}
                  // className="absolute text-3xl origin-[0%_400%] md:text-5xl md:origin-[0%_500%]"
                  className="text-4xl md:text-6xl absolute"
                  style={{
                    transform: `rotate(${
                      (360 / headerText.length) * index
                    }deg)`,
                  }}
                >
                  <div className="mb-[16rem] md:mb-[24rem]">{char}</div>
                </div>
              ))}
          </div>
        </div>
        <button
          onClick={scrollToAbout}
          className="mt-24 my-auto border border-rose-brown-800 rounded-full px-4 py-2 text-xl"
        >
          {"LET'S GO ↓"}
        </button>
      </div>
      <div className="h-screen py-24 px-4 font-serif" ref={aboutRef}>
        <h1 className="text-xl">{`Hello, I'm Ying`}</h1>
        <p>{`I'm a software developer from Singapore. Test`}</p>
      </div>
    </motion.div>
  );
}
