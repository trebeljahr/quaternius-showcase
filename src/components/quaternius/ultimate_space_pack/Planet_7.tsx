import { useGLTF } from "@react-three/drei";
import type * as THREE from "three";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Planet_7: THREE.Mesh;
  };
  materials: {
    Atlas: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/glb/ultimate_space_pack/Planet_7-transformed.glb",
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Planet_7.geometry} material={materials.Atlas} />
    </group>
  );
}

useGLTF.preload("/glb/ultimate_space_pack/Planet_7-transformed.glb");
