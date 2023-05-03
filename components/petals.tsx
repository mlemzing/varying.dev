import { PetalMaterial } from "@/materials/petals";
import { extend, useFrame } from "@react-three/fiber";
import { useMemo, useState } from "react";
import { DoubleSide, NormalBlending } from "three";

extend({ PetalMaterial });
export default function Petals() {
  const [time, setTime] = useState(0);
  useFrame((state, delta) => {
    setTime(state.clock.elapsedTime);
  });
  const count = 1000;
  let positions = useMemo(() => {
    let positions: number[] = [];
    for (let i = 0; i < count; i++) {
      let i3 = i * 3;
      positions.push(
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5
      );
    }

    return new Float32Array(positions);
  }, [count]);
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <petalMaterial
        side={DoubleSide}
        uTime={time}
        blending={NormalBlending}
        transparent
        depthWrite={false}
      />
    </points>
  );
}
