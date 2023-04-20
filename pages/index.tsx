import { Xanh_Mono } from "next/font/google";

const xanhMono = Xanh_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-xanh",
});
export default function Home() {
  const headerText = " me for the ride Join";
  return (
    <main className={`${xanhMono.variable} font-mono`}>
      <div className="flex flex-col items-center justify-between bg-rose-brown-400 bg-paper-texture">
        <div className="h-screen flex p-32">
          <div className="h-64 w-64 absolute text-rose-brown-800 font-xanh">
            {headerText
              .toUpperCase()
              .split("")
              .map((char, index) => (
                <div
                  key={index}
                  style={{
                    position: `absolute`,
                    fontSize: `3rem`,
                    fontWeight: `700`,
                    transformOrigin: `0 16rem`,
                    transform: `rotate(${
                      (360 / headerText.length) * index
                    }deg)`,
                  }}
                >
                  {char}
                </div>
              ))}
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
