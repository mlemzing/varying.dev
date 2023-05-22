import { PetalMaterial } from "@/materials/petals";
import { OrbitControls } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { BufferAttribute, DoubleSide, NormalBlending, Vector3 } from "three";

extend(PetalMaterial);
export default function PetalTrail() {
  let count = 200;
  const [mouseRay, setMouseRay] = useState<Vector3>(new Vector3(0.5, 0.5, 0.5));
  const [positions, setPositions] = useState<Float32Array>(
    new Float32Array(new Array(count * 3).fill(0.1))
  );
  const [time, setTime] = useState(0);
  let attributes: {
    aRotate: Float32Array;
    aSpeed: Float32Array;
    aDeviateX: Float32Array;
    aDeviateY: Float32Array;
    aDeviateZ: Float32Array;
  } = useMemo(() => {
    let aRotate: number[] = [];
    let aSpeed: number[] = [];
    let aDeviateX: number[] = [];
    let aDeviateY: number[] = [];
    let aDeviateZ: number[] = [];
    for (let i = 0; i < count; i++) {
      let angle = (Math.random() - 0.5) * 2;
      aRotate.push(Math.random() - 0.5);
      aSpeed.push(Math.random() * 5);
      aDeviateX.push(Math.cos(angle) * ((Math.random() - 0.5) * 2));
      aDeviateY.push(Math.sin(angle) * ((Math.random() - 0.5) * 2));
      aDeviateZ.push((Math.random() - 0.5) * 2);
    }

    return {
      aRotate: new Float32Array(aRotate),
      aSpeed: new Float32Array(aSpeed),
      aDeviateX: new Float32Array(aDeviateX),
      aDeviateY: new Float32Array(aDeviateY),
      aDeviateZ: new Float32Array(aDeviateZ),
    };
  }, [count]);

  useEffect(() => {
    let newPositions = [];
    if (positions) {
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const previous3 = (i - 1) * 3;
        if (i3 === 0) {
          newPositions[i3] = mouseRay.x;
          newPositions[i3 + 1] = mouseRay.y;
          newPositions[i3 + 2] = positions[2];
        } else {
          let currentPoint = new Vector3(
            positions[i3],
            positions[i3 + 1],
            positions[i3 + 2]
          );
          let previousPoint = new Vector3(
            positions[previous3],
            positions[previous3 + 1],
            positions[i3 + 2]
          );
          const lerpPoint = currentPoint.lerp(previousPoint, 0.8);
          console.log(lerpPoint);
          newPositions[i3] = lerpPoint.x;
          newPositions[i3 + 1] = lerpPoint.y;
          newPositions[i3 + 2] = lerpPoint.z;
        }
      }
      setPositions(new Float32Array(newPositions));
      pointsRef.current.needsUpdate = true;
    } else {
      let newPositions = [];
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        newPositions[i3] = Math.random() - 0.5;
        newPositions[i3 + 1] = Math.random() - 0.5;
        newPositions[i3 + 2] = Math.random() - 0.5;
      }
      setPositions(new Float32Array(newPositions));
    }
  }, [count, mouseRay, positions]);

  const pointsRef = useRef<BufferAttribute>(null!);
  useFrame((state, delta) => {
    let mouse: Vector3 = new Vector3(state.mouse.x, state.mouse.y, 1);

    // convert screen coordinates to threejs world position
    // https://stackoverflow.com/questions/13055214/mouse-canvas-x-y-to-three-js-world-x-y-z

    var vector = new Vector3(mouse.x, mouse.y, 0.5);
    vector.unproject(state.camera);
    var dir = vector.sub(state.camera.position).normalize();
    var distance = -state.camera.position.z / dir.z;
    var pos = state.camera.position.clone().add(dir.multiplyScalar(distance));

    mouse = pos;

    setMouseRay(mouse);
    setTime(state.clock.elapsedTime);
  });
  return (
    <>
      <OrbitControls />
      <points>
        <bufferGeometry>
          <bufferAttribute
            ref={pointsRef}
            attach="attributes-position"
            array={positions}
            count={count}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-aRotate"
            array={attributes.aRotate}
            count={attributes.aRotate.length}
            itemSize={1}
          />
          <bufferAttribute
            attach="attributes-aSpeed"
            array={attributes.aSpeed}
            count={attributes.aSpeed.length}
            itemSize={1}
          />
          <bufferAttribute
            attach="attributes-aDeviateX"
            array={attributes.aDeviateX}
            count={attributes.aDeviateX.length}
            itemSize={1}
          />
          <bufferAttribute
            attach="attributes-aDeviateY"
            array={attributes.aDeviateY}
            count={attributes.aDeviateY.length}
            itemSize={1}
          />
          <bufferAttribute
            attach="attributes-aDeviateZ"
            array={attributes.aDeviateZ}
            count={attributes.aDeviateZ.length}
            itemSize={1}
          />
        </bufferGeometry>
        <petalMaterial
          side={DoubleSide}
          uTime={time}
          blending={NormalBlending}
          transparent
          depthWrite={false}
        />
        {/* <pointsMaterial color="red" size={0.2} sizeAttenuation={true} /> */}
      </points>
    </>
  );
}
