import { PetalMaterial } from "@/materials/petals";
import { extend, useFrame } from "@react-three/fiber";
import { useMemo, useState } from "react";
import { DoubleSide, NormalBlending } from "three";

extend({ PetalMaterial });
export default function Petals() {
  const [time, setTime] = useState(0);
  const [mouse, setMouse] = useState([0.5, 0.5]);
  useFrame((state, delta) => {
    setTime(state.clock.elapsedTime);
    setMouse([state.mouse.x, state.mouse.y]);
  });
  const count = 500;
  let positions = useMemo(() => {
    let positions: number[] = [];
    let aRotate: number[] = [];
    let aSpeed: number[] = [];
    for (let i = 0; i < count; i++) {
      positions.push(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 10
      );
      aRotate.push(Math.random() + 0.5);
      aSpeed.push((Math.random() + 0.5) * 5);
    }

    return [
      new Float32Array(positions),
      new Float32Array(aRotate),
      new Float32Array(aSpeed),
    ];
  }, [count]);
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions[0]}
          count={positions[0].length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aRotate"
          array={positions[1]}
          count={positions[1].length}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aSpeed"
          array={positions[2]}
          count={positions[2].length}
          itemSize={1}
        />
      </bufferGeometry>
      <petalMaterial
        side={DoubleSide}
        uTime={time}
        uMouseX={mouse[0]}
        uMouseY={mouse[1]}
        blending={NormalBlending}
        transparent
        depthWrite={false}
      />
    </points>
  );
}
