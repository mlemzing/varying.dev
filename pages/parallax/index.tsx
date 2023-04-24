import { Parallax, ParallaxLayer } from "@react-spring/parallax";
export default function ParallaxPage() {
  return (
    <Parallax pages={2}>
      <ParallaxLayer>
        <div className="logo h-10"></div>
      </ParallaxLayer>
      <ParallaxLayer speed={0.2}>
        <div className="mountain0 h-screen"></div>
      </ParallaxLayer>
      <ParallaxLayer speed={0.3}>
        <div className="mountain1 h-screen"></div>
      </ParallaxLayer>
      <ParallaxLayer speed={0.4}>
        <div className="mountain2 h-screen"></div>
      </ParallaxLayer>
      <ParallaxLayer speed={0.45}>
        <div className="mountain3 h-screen"></div>
      </ParallaxLayer>
      <ParallaxLayer speed={0.5}>
        <div className="mountain4 h-screen"></div>
      </ParallaxLayer>
      <ParallaxLayer speed={0.545}>
        <div className="mountain5 h-screen"></div>
      </ParallaxLayer>
      <ParallaxLayer speed={0.575}>
        <div className="mountain6 h-screen"></div>
      </ParallaxLayer>
      <ParallaxLayer speed={0.6}>
        <div className="mountain7 h-screen"></div>
      </ParallaxLayer>
      <ParallaxLayer speed={0.675}>
        <div className="mountain8 h-screen"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={1.3} speed={0.2}>
        <div className="anna h-screen"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={1.3} speed={0.1}>
        <div className="blake h-screen"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={1.3} speed={0.4}>
        <div className="tim h-screen"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.99} speed={0.9} className="relative z-0">
        <div className="textblock h-screen"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={1}>
        <div className="h-screen w-full flex">
          <div className="mx-auto text-rose-brown-100">
            <div className="bg-none">parallax test 123</div>
          </div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}
