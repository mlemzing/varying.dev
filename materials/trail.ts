import { shaderMaterial } from "@react-three/drei";

export const TrailMaterial = shaderMaterial(
  {
    uSpeed: 0,
    uTime: 0,
    uTouch: 0,
  },
  `
    uniform float uTime;
    uniform float uSpeed;
    attribute float aSpeed;
    attribute float aRotate;
    void main() {
      vec3 newPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      
      vec4 viewPosition = viewMatrix * modelMatrix * vec4(position, 1.0);
      gl_PointSize = 50.0;
      gl_PointSize *= (1.0 / -viewPosition.z);
    }
  `,
  `
    void main() {
      gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
    }
  `
);
