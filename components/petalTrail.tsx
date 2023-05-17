import { useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import { DoubleSide } from "three";

export default function PetalTrail() {
  let count = 100;
  let positions = useMemo(() => {
    let positions: number[] = [];
    let aRotate: number[] = [];
    let aSpeed: number[] = [];
    for (let i = 0; i < count; i++) {
      positions.push(
        Math.random() - 0.5,
        Math.random() - 0.5,
        (Math.random() - 0.5) * 10
      );
      aRotate.push(Math.random() - 0.5);
      aSpeed.push(Math.random() * 5);
    }

    return [
      new Float32Array(positions),
      new Float32Array(aRotate),
      new Float32Array(aSpeed),
    ];
  }, [count]);

  useFrame((state, delta) => {});
  return (
    <>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions[0]}
            count={count}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="red" size={0.2} sizeAttenuation={true} />
      </points>
    </>
  );
}
