import { PetalMaterial } from "@/materials/petals";
import { extend, useFrame } from "@react-three/fiber";
import { useState } from "react";
import { DoubleSide, NormalBlending } from "three";

extend({ PetalMaterial });
export default function Petal() {
  const [elapsedTime, setElapsedTime] = useState(0);
  useFrame((state, delta) => {
    setElapsedTime(elapsedTime + delta);
  });
  return (
    <mesh>
      <planeGeometry args={[8, 8, 20, 20]} />
      <petalMaterial
        side={DoubleSide}
        uTime={elapsedTime}
        blending={NormalBlending}
        transparent
      />
    </mesh>
  );
}
