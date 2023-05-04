import { shaderMaterial } from "@react-three/drei";
import { Object3DNode, extend } from "@react-three/fiber";
import { Color, ShaderMaterial } from "three";

export const PetalMaterial = shaderMaterial(
  { uTime: 0, uMouseX: 0, uMouseY: 0, color: new Color(0.2, 0.0, 0.1) },
  // vertex shader
  /*glsl*/ `
    varying vec2 vUv;
    uniform float uTime;
    uniform float uMouseX;
    uniform float uMouseY;

    attribute float aRotate;
    attribute float aSpeed;

    varying float vRotate;
    varying float vSpeed;
    void main() {
      vUv = uv;
      // float newX = sin(position.x * uTime) * sin(position.y * uTime);
      // vec3 newPosition = vec3(newX, position.yz);
      // gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      // vec2 newXY = length(position.xy) - 0.5;
      vec3 newPosition = vec3(position.x + uMouseX, position.y + uMouseY, position.z);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);

      vec4 viewPosition = viewMatrix * modelMatrix * vec4(position, 1.0);
      gl_PointSize = 150.0;
      gl_PointSize *= (1.0 / -viewPosition.z);
      vRotate = aRotate;
      vSpeed = aSpeed;
    }
  `,
  // fragment shader
  /*glsl*/ `
    uniform float uTime;
    varying vec2 vUv;
    varying float vRotate;
    varying float vSpeed;

    float sdVesica(vec2 p, float r, float d)
    {
        p = abs(p);
        float b = sqrt(r*r-d*d);
        return ((p.y-b)*d>p.x*b) ? length(p-vec2(0.0,b))
                                : length(p-vec2(-d,0.0))-r;
    }
    void main() {
      vec2 newUv = gl_PointCoord - 0.5;

      newUv *= mat2(cos(uTime * vSpeed), sin(uTime * vSpeed), -sin(uTime * vSpeed), cos(uTime * vSpeed));
      newUv.y *= 2. + sin(uTime * vSpeed);
      float diff = 1.0 - step(0.5, length(newUv));
      // gl_FragColor = vec4(vec3(diff), diff);
      float distanceVesica = sdVesica(newUv, 0.4, 0.15);
      gl_FragColor = vec4(vec3(diff == 1.0 ? 0.9882 : 0.0, diff == 1.0 ? 0.7882 : 0.0, diff == 1.0 ? 0.7255 : 0.0), distanceVesica > 0.0 ? 0.0: 1.0);
    }
  `
);

extend({ PetalMaterial });

declare module "@react-three/fiber" {
  interface ThreeElements {
    // @ts-ignore
    petalMaterial: Object3DNode<PetalMaterial, typeof ShaderMaterial>;
  }
}
