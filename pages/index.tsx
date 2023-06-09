import Hero from "@/components/hero";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRef } from "react";

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
      <Head>
        <title>{`Ying's Portfolio`}</title>
      </Head>
      {/* <div className="absolute h-screen w-screen butterfly-canvas">
        <Canvas>
          <Hero />
        </Canvas>
      </div> */}
      <div className="h-screen w-screen flex flex-col items-center text-rose-brown-800">
        <div className="font-mono h-2/3 font-semi flex overflow-hidden w-full justify-center items-center">
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
          className="mt-24 my-auto border border-rose-brown-800 rounded-full px-4 py-2 font-sans text-xl"
        >
          {"LET'S GO ↓"}
        </button>
      </div>
      <div className="h-screen py-24 px-4 space-y-2" ref={aboutRef}>
        <h1 className="text-xl">{`Hello, I'm Ying`}</h1>
        <p>{`I'm a software developer with a focus on front-end development from Singapore.`}</p>
        <p>{`My experience lies in the React Framework and I enjoy creating scenes and animating with ThreeJS.`}</p>
        <ul>
          <li>
            <a href="https://github.com/mlemzing">Github</a>
          </li>
          <li>
            <a href="https://codepen.io/mlemzing">CodePen</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ying-zhang-667955134/">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
