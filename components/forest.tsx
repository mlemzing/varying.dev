import {
  OrbitControls,
  ScrollControls,
  useScroll,
  useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useCallback, useRef, useState } from "react";
import { Mesh, MeshBasicMaterial } from "three";

type ForestProps = {
  setShowBottom: (value: boolean) => void;
};
export default function Forest({ setShowBottom }: ForestProps) {
  const scroll = useScroll();
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
  const textureAnimator = useCallback(() => {}, []);
  useFrame((state, delta) => {
    let scrollOffset = Math.ceil(scroll.offset / 0.0004);
    console.log(scrollOffset % 40);
    if (scrollOffset) {
      // Dampen animation after stopping scroll
      if (scrollOffset % 80 < 20) {
        console.log("human 1");
        humanRef.current.map = human1;
      } else if (scrollOffset % 80 < 40) {
        console.log("human 2");
        humanRef.current.map = human2;
      } else if (scrollOffset % 80 < 60) {
        console.log("human 3");
        humanRef.current.map = human3;
      } else {
        console.log("human 4");
        humanRef.current.map = human2;
      }
    }

    const inForest = scroll.range(0, 1 / 2);
    const inClouds = scroll.range(1 / 2, 1);
    state.camera.position.y +=
      (state.mouse.y * 0.5 - state.camera.position.y) * delta;
    state.camera.position.x = inForest * finalX;
    if (humanMeshRef) {
      humanMeshRef.current.position.x = inForest * 10;
    }
    // state.camera.position.x +=
    //   (state.mouse.x * 5 - state.camera.position.x) * delta;
    state.camera.position.z = -(inClouds * 15) + 5;
    // console.log(inClouds);
    if (inClouds >= 0.5) {
      console.log("end clouds");
      setShowBottom(true);
    }
    // if (state.camera.position.x < finalX && !pastForest) {
    //   state.camera.position.x = inForest * finalX;
    //   if (humanMeshRef) {
    //     humanMeshRef.current.position.x = inForest * 10;
    //   }
    // } else {
    //   if (state.camera.position.z > -3) {
    //     state.camera.position.z = -inClouds + 5;
    //   } else {
    //     setShowBottom(true);
    //   }
    //   if (pastForest) {
    //     state.camera.position.x +=
    //       (finalX - (state.camera.position.x + state.mouse.x * 0.75)) * delta;
    //   }
    // }
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
