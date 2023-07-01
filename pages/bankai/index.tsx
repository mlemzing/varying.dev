import Byakuya from "@/components/byakuya";
import Petal from "@/components/petal";
import Petals from "@/components/petals";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Bankai() {
  return (
    <div className="h-screen w-screen bg-black">
      <Canvas>
        {/* <OrbitControls /> */}
        {/* <points>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attach="attributes-position"
              array={new Float32Array([0, 0, 0])}
              itemSize={3}
              count={1}
            />
          </bufferGeometry>
          <pointsMaterial />
        </points> */}
        {/* <mesh>
          <sphereGeometry />
          <shaderMaterial />
        </mesh> */}
        {/* <Petal /> */}
        <Byakuya />
        <Petals />
      </Canvas>
    </div>
  );
}
