import { PetalMaterial } from "@/materials/petals";
import { TrailMaterial } from "@/materials/trail";
import { VortexMaterial } from "@/materials/vortex";
import { OrbitControls } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useMemo, useState } from "react";
import THREE, { Camera, DoubleSide, NormalBlending, Vector3 } from "three";

extend({ PetalMaterial });
extend({ VortexMaterial });
extend({ TrailMaterial });
export default function Petals() {
  const [time, setTime] = useState(0);
  const [mouse, setMouse] = useState([0.5, 0.5]);
  const [camera, setCamera] = useState<Camera>();
  const [rayDirection, setRayDirection] = useState([0, 0, -1]);
  let vector = useMemo(() => {
    let vector = new Vector3();
    vector.set(mouse[0], mouse[1], 0);
    if (camera) {
      vector.unproject(camera);
    }
    return vector;
  }, [camera, mouse]);

  useFrame((state, delta) => {
    setTime(state.clock.elapsedTime);
    setMouse([state.mouse.x, state.mouse.y]);
    setRayDirection([
      state.raycaster.ray.direction.x,
      state.raycaster.ray.direction.y,
      state.raycaster.ray.direction.z,
    ]);
    setCamera(state.camera);
  });
  const count = 1000;
  let positions = useMemo(() => {
    let positions: number[] = [];
    let aRotate: number[] = [];
    let aSpeed: number[] = [];
    for (let i = 0; i < count; i++) {
      positions.push(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8 - 4
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
  return (
    <>
      <OrbitControls />
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
        {/* <vortexMaterial uTime={time} /> */}
        <petalMaterial
          side={DoubleSide}
          uTime={time}
          uMouseX={mouse[0]}
          uMouseY={mouse[1]}
          uRayX={vector.x}
          uRayY={vector.y}
          uRayZ={vector.z}
          // uRayX={rayDirection[0]}
          // uRayY={rayDirection[1]}
          // uRayZ={rayDirection[2]}
          blending={NormalBlending}
          transparent
          depthWrite={false}
        />
        {/* <trailMaterial side={DoubleSide} transparent depthWrite={false} /> */}
      </points>
    </>
  );
}
