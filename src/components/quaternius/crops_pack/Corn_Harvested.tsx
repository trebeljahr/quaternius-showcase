/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Corn_Harvested_1: THREE.Mesh
    Corn_Harvested_2: THREE.Mesh
  }
  materials: {
    Yellow: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/crops_pack/Corn_Harvested.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Corn_Harvested_1.geometry} material={materials.Yellow} />
        <mesh geometry={nodes.Corn_Harvested_2.geometry} material={materials.Green} />
      </group>
    </group>
  )
}
