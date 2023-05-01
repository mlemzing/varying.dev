import { OrbitControls, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
export default function Forest() {
  const [pastForest, setPastForest] = useState(false);
  const finalX = 18;
  const [forest1, forest2, forest3, forest4, cloud1, cloud2, cloud3] =
    useTexture([
      "./forest/forest1.png",
      "./forest/forest2.png",
      "./forest/forest3.png",
      "./forest/forest4.png",
      "./forest/cloud1.png",
      "./forest/cloud2.png",
      "./forest/cloud3.png",
    ]);
  useFrame((state, delta) => {
    state.camera.position.y +=
      (state.mouse.y * 0.5 - state.camera.position.y) * delta;
    if (state.camera.position.x < finalX && !pastForest) {
      state.camera.position.x += delta;
    } else {
      setPastForest(true);
      if (state.camera.position.z > -3) {
        state.camera.position.z -= delta * 2;
      }
      if (pastForest) {
        state.camera.position.x +=
          (finalX - (state.camera.position.x + state.mouse.x * 0.75)) * delta;
      }
    }
  });
  return (
    <>
      {/* <OrbitControls /> */}
      <mesh scale={[20, 10, 10]} position={[0, 0, 0]}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={forest1} transparent />
      </mesh>
      <mesh scale={[20, 10, 10]} position={[0, 0, -0.5]}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={forest2} transparent />
      </mesh>
      <mesh scale={[20, 10, 10]} position={[0, 0, -1]}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={forest3} transparent />
      </mesh>
      <mesh scale={[20, 10, 10]} position={[0, 0, -1.5]}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={forest4} transparent />
      </mesh>
      <mesh scale={10} position={[18, 0, -5]}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={cloud1} transparent />
      </mesh>
      <mesh scale={10} position={[18, 0, -6]}>
        <planeGeometry args={[1, 1, 10, 10]} />
        <meshBasicMaterial color={"black"} wireframe />
        <meshBasicMaterial map={cloud2} transparent />
      </mesh>
      <mesh scale={10} position={[18, 0, -7]}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={cloud3} transparent />
      </mesh>
      {/* <mesh scale={12} position={[18, 0, -7]}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial color={"blue"} wireframe />
      </mesh> */}
    </>
  );
}
