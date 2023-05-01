import { Canvas } from "@react-three/fiber";
import Forest from "../../components/forest";
export default function Parallax3D() {
  return (
    <div className="w-screen h-screen bg-black">
      <Canvas>
        <Forest />
      </Canvas>
    </div>
  );
}
