import {
  OrbitControls,
  ScrollControls,
  useScroll,
  useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useCallback, useRef, useState } from "react";
import { Mesh, MeshBasicMaterial } from "three";

type CloudProps = {
  setShowBottom: (value: boolean) => void;
};
export default function Clouds({ setShowBottom }: CloudProps) {
  const scroll = useScroll();
  const [pastForest, setPastForest] = useState(false);
  const [pastClouds, setPastClouds] = useState(false);
  const finalX = 18;
  const [
    layer1,
    layer2,
    layer3,
    layer4,
    layer5,
    layer6,
    layer7,
    layer8,
    layer9,
    layer10,
    layer11,
    layer12,
    light1,
    light2,
    light3,
    light4,
  ] = useTexture([
    "./skyislands/layer1.png",
    "./skyislands/layer2.png",
    "./skyislands/layer3.png",
    "./skyislands/layer4.png",
    "./skyislands/layer5.png",
    "./skyislands/layer6.png",
    "./skyislands/layer7.png",
    "./skyislands/layer8.png",
    "./skyislands/layer9.png",
    "./skyislands/layer10.png",
    "./skyislands/layer11.png",
    "./skyislands/layer12.png",
    "./light/specks.png",
    "./light/eclipseflare.png",
    "./light/hexflare.png",
    "./light/radianceflare.png",
  ]);

  const layer1Ref = useRef<Mesh>(null!);
  const layer2Ref = useRef<Mesh>(null!);
  const layer3Ref = useRef<Mesh>(null!);
  const layer4Ref = useRef<Mesh>(null!);
  const layer5Ref = useRef<Mesh>(null!);
  const layer6Ref = useRef<Mesh>(null!);
  const layer7Ref = useRef<Mesh>(null!);
  const layer8Ref = useRef<Mesh>(null!);
  const layer9Ref = useRef<Mesh>(null!);
  const layer10Ref = useRef<Mesh>(null!);
  const layer11Ref = useRef<Mesh>(null!);
  const light2Ref = useRef<Mesh>(null!);
  const light3Ref = useRef<Mesh>(null!);
  const light4Ref = useRef<Mesh>(null!);
  useFrame((state, delta) => {
    const inClouds = scroll.range(0, 1);
    state.camera.position.y = -inClouds * 4.5;
    light2Ref.current.position.y =
      state.camera.position.y + 2.45 + inClouds * 0.5;
    light3Ref.current.position.y =
      state.camera.position.y + 2.45 + inClouds * 0.5;
    light4Ref.current.position.y =
      state.camera.position.y + 2.45 + inClouds * 0.5;
    light2Ref.current.rotation.z = inClouds * 0.3;
    light3Ref.current.rotation.z = inClouds * 0.3;
    light4Ref.current.rotation.z = inClouds * 0.3;
    light2Ref.current.scale.x = 15 + inClouds * 5;
    light2Ref.current.scale.y = 15 + inClouds * 5;
    light3Ref.current.scale.x = 15 + inClouds * 10;
    light3Ref.current.scale.y = 15 + inClouds * 10;
    light4Ref.current.scale.x = 15 + inClouds * 5;
    light4Ref.current.scale.y = 15 + inClouds * 5;
    console.log(inClouds);

    // state.camera.position.x = state.mouse.x * 0.5 - state.camera.position.x;
    // state.camera.position.y = state.mouse.y * 0.5 - state.camera.position.y;
  });

  return (
    <>
      {/* <OrbitControls /> */}
      <mesh scale={[35, 15, 20]} position={[0, -1, -0.1]} ref={layer1Ref}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={layer1} transparent />
      </mesh>
      <mesh
        scale={[37.5, 16.125, 15]}
        position={[0, -0.65, -0.5]}
        ref={layer2Ref}
      >
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={layer2} transparent />
      </mesh>
      <mesh scale={[40, 17, 15]} position={[0, -1, -0.75]} ref={layer3Ref}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={layer3} transparent />
      </mesh>
      <mesh scale={[30, 10, 15]} position={[0, -0.125, -1]} ref={layer4Ref}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={layer4} transparent />
      </mesh>
      <mesh scale={[30, 10, 15]} position={[0, -0.25, -1]} ref={layer5Ref}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={layer5} transparent />
      </mesh>
      <mesh scale={[40, 13, 15]} position={[0, 0, -3.5]} ref={layer6Ref}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={layer6} transparent />
      </mesh>
      <mesh scale={[45, 17, 15]} position={[0, -1.5, -5.75]} ref={layer7Ref}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={layer7} transparent />
      </mesh>
      <mesh scale={[40, 15, 1]} position={[0, -1, -7.5]} ref={layer8Ref}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={layer8} transparent />
      </mesh>
      <mesh scale={[45, 17, 1]} position={[0, 0, -10]} ref={layer9Ref}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={layer9} transparent />
      </mesh>
      <mesh scale={[65, 20, 1]} position={[0, 0, -14]} ref={layer10Ref}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={layer10} transparent />
      </mesh>
      <mesh scale={[65, 20, 1]} position={[0, 0, -15]} ref={layer10Ref}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={layer11} transparent />
      </mesh>
      <mesh scale={[15, 15, 1]} position={[2.5, 2.5, 0]} ref={light4Ref}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={light4} transparent />
      </mesh>
      <mesh scale={[15, 15, 1]} position={[2.5, 2.5, 0]} ref={light3Ref}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={light3} transparent />
      </mesh>
      <mesh scale={[15, 15, 1]} position={[2.5, 2.5, 0]} ref={light2Ref}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={light2} transparent />
      </mesh>
      <mesh scale={[120, 120, 1]} position={[15, 14, -24.45]}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={light1} transparent />
      </mesh>
      <mesh scale={[120, 120, 1]} position={[15, 14, -24.45]}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={light1} transparent />
      </mesh>
      <mesh scale={[120, 120, 1]} position={[15, 14, -24.45]}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={light1} transparent />
      </mesh>
      <mesh scale={[150, 150, 1]} position={[0, 0, -25]}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial map={layer12} transparent />
      </mesh>
    </>
  );
}
