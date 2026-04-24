import { useGLTF } from "@react-three/drei";
import type * as THREE from "three";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    House_OpenBack: THREE.Mesh;
  };
  materials: {
    Atlas: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/glb/ultimate_space_pack/House_OpenBack-transformed.glb",
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.House_OpenBack.geometry} material={materials.Atlas} />
    </group>
  );
}

useGLTF.preload("/glb/ultimate_space_pack/House_OpenBack-transformed.glb");
