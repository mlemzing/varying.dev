import { Canvas } from "@react-three/fiber";
import Forest from "../../components/forest";
import { useState } from "react";
import { ScrollControls } from "@react-three/drei";
export default function Parallax3D() {
  const [showBottom, setShowBottom] = useState(false);
  const handleShowBottom = (value: boolean) => {
    setShowBottom(value);
  };
  return (
    <div className="bg-black">
      <div className="w-screen h-screen bg-black">
        <Canvas>
          <ScrollControls pages={2}>
            <Forest setShowBottom={handleShowBottom} />
          </ScrollControls>
        </Canvas>
      </div>
      {showBottom && (
        <div className="w-screen h-screen flex flex-col text-rose-brown-200 p-24 items-center space-y-24">
          <div>blabla</div>
          <div>blabla</div>
          <div>blabla</div>
          <div>blabla</div>
        </div>
      )}
    </div>
  );
}
