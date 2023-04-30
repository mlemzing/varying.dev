import { Center, Text3D, OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
export default function Hero() {
  const colorMap = useLoader(TextureLoader, "./textures/mangamatcap.jpeg");
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight intensity={3} />
      <mesh>
        {/* @ts-ignore */}
        <Center>
          {/* @ts-ignore */}
          <Text3D font={"./fonts/Sigmar_Regular.json"} scale={0.75}>
            Hello
            <meshMatcapMaterial matcap={colorMap} />
          </Text3D>
        </Center>
      </mesh>
    </>
  );
}
