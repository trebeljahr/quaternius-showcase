import { useGLTF } from "@react-three/drei";
import type * as THREE from "three";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    SolarPanel_Roof: THREE.Mesh;
  };
  materials: {
    Atlas: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/glb/ultimate_space_pack/SolarPanel_Roof-transformed.glb",
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.SolarPanel_Roof.geometry} material={materials.Atlas} />
    </group>
  );
}

useGLTF.preload("/glb/ultimate_space_pack/SolarPanel_Roof-transformed.glb");
