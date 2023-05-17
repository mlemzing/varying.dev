import PetalTrail from "@/components/petalTrail";
import { Canvas } from "@react-three/fiber";

export default function Trail() {
  return (
    <div className="h-screen w-screen bg-black">
      <Canvas>
        <PetalTrail />
      </Canvas>
    </div>
  );
}
