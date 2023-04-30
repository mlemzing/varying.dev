import { useFrame } from "@react-three/fiber";
export default function Forest() {
  useFrame((state, delta) => {
    state.camera.position.y +=
      (state.mouse.y * 0.2 - state.camera.position.y) * 0.2;
    if (state.camera.position.x < 8) {
      state.camera.position.x += delta;
    } else {
      if (state.camera.position.z > -3) {
        state.camera.position.z -= delta;
      }
    }
  });
  return (
    <>
      <mesh scale={5} position={[-2, 0, 1]}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial color={"red"} wireframe />
      </mesh>
      <mesh scale={20} position={[-3, 0, -5]}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial color={"black"} wireframe />
      </mesh>
      <mesh scale={5}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial color={"blue"} wireframe />
      </mesh>
      <mesh scale={15} position={[2, 2, -2]}>
        <planeGeometry args={[1, 1, 10, 10]} />
        <meshBasicMaterial color={"green"} wireframe />
      </mesh>
      <mesh scale={20} position={[10, 0, -8]}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial color={"red"} wireframe />
      </mesh>
      <mesh scale={12} position={[11, -3, -7]}>
        <planeGeometry args={[1, 1, 20, 20]} />
        <meshBasicMaterial color={"blue"} wireframe />
      </mesh>
    </>
  );
}
