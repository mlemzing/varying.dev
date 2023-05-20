import { shaderMaterial } from "@react-three/drei";
import { Object3DNode, extend } from "@react-three/fiber";
import { Color, ShaderMaterial, Vector3 } from "three";

export const PetalMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouseX: 0,
    uMouseY: 0,
    uRayX: 0,
    uRayY: 0,
    uRayZ: -1,
    color: new Color(0.2, 0.0, 0.1),
  },
  // vertex shader
  /*glsl*/ `
    varying vec2 vUv;
    uniform float uTime;
    uniform float uMouseX;
    uniform float uMouseY;
    uniform float uRayX;
    uniform float uRayY;
    uniform float uRayZ;

    attribute float aRotate;
    attribute float aSpeed;
    attribute float aDeviateX;
    attribute float aDeviateY;
    attribute float aDeviateZ;

    varying float vRotate;
    varying float vSpeed;

    vec3 findTargetPoint(vec3 origin, vec3 direction, float z) {
      float t = z / direction.z;
      vec3 intersectionPoint = origin + t * direction;
      return intersectionPoint;
    }
    void main() {
      vec3 newPosition = position;
      newPosition.x += aDeviateX;
      newPosition.y += aDeviateY;
      newPosition.z += aDeviateZ;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);

      vec4 viewPosition = viewMatrix * modelMatrix * vec4(position, 1.0);
      gl_PointSize = 250.0;
      gl_PointSize *= (1.0 / -viewPosition.z);
      vRotate = aRotate;
      vSpeed = aSpeed;
      vUv = uv;
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
      // gl_FragColor = vec4(1.0);
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
