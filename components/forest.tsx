import { OrbitControls, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh, MeshBasicMaterial } from "three";

type ForestProps = {
  setShowBottom: (value: boolean) => void;
};
export default function Forest({ setShowBottom }: ForestProps) {
  const [pastForest, setPastForest] = useState(false);
  const [pastClouds, setPastClouds] = useState(false);
  const finalX = 18;
  const [
    forest1,
    forest2,
    forest3,
    forest4,
    cloud1,
    cloud2,
    cloud3,
    human1,
    human2,
    human3,
  ] = useTexture([
    "./forest/forest1.png",
    "./forest/forest2.png",
    "./forest/forest3.png",
    "./forest/forest4.png",
    "./forest/cloud1.png",
    "./forest/cloud2.png",
    "./forest/cloud3.png",
    "./forest/human1.png",
    "./forest/human2.png",
    "./forest/human3.png",
  ]);

  const humanRef = useRef<MeshBasicMaterial>(null!);
  const humanMeshRef = useRef<Mesh>(null!);
  const [humanIndex, setHumanIndex] = useState(1);
  useFrame((state, delta) => {
    if (humanRef) {
      switch (humanIndex) {
        case 1: {
          humanRef.current.map = human1;
          setHumanIndex(2);
          break;
        }
        case 2: {
          humanRef.current.map = human2;
          setHumanIndex(3);
          break;
        }
        case 3: {
          humanRef.current.map = human3;
          setHumanIndex(4);
          break;
        }
        case 4: {
          humanRef.current.map = human2;
          setHumanIndex(1);
          break;
        }
      }
    }
    state.camera.position.y +=
      (state.mouse.y * 0.5 - state.camera.position.y) * delta;
    if (state.camera.position.x < finalX && !pastForest) {
      state.camera.position.x += delta;
      if (humanMeshRef) {
        humanMeshRef.current.position.x += delta * 0.5;
      }
    } else {
      setPastForest(true);
      if (state.camera.position.z > -3) {
        state.camera.position.z -= delta * 2;
      } else {
        setPastClouds(true);
        setShowBottom(true);
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
      <mesh scale={[20, 10, 10]} position={[0, 0, -0.5]} ref={humanMeshRef}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={human1} transparent ref={humanRef} />
      </mesh>
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
