import { Xanh_Mono } from "next/font/google";

const xanhMono = Xanh_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-xanh",
});
export default function Home() {
  const headerText = " me for the ride Join";
  return (
    <main className={`${xanhMono.variable}`}>
      <div className="flex flex-col items-center justify-between bg-rose-brown-400 bg-paper-texture">
        <div className="h-screen p-24">
          <div className="h-full flex flex-col items-center text-rose-brown-800">
            <div className="font-mono h-2/5 md:h-2/3">
              {headerText
                .toUpperCase()
                .split("")
                .map((char, index) => (
                  <div
                    key={index}
                    className="absolute text-3xl origin-[0%_400%] md:text-5xl md:origin-[0%_500%]"
                    style={{
                      transform: `rotate(${
                        (360 / headerText.length) * index
                      }deg)`,
                    }}
                  >
                    {char}
                  </div>
                ))}
            </div>
            <div className="mt-24 my-auto border border-rose-brown-800 rounded-full px-4 py-2">
              DIVE IN
            </div>
          </div>
        </div>
        <div className="h-screen">
          <h3>Portfolio</h3>
          <div></div>
        </div>
      </div>
    </main>
  );
}
