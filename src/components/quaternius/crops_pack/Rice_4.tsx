/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Rice_4_1: THREE.Mesh
    Rice_4_2: THREE.Mesh
  }
  materials: {
    Green: THREE.MeshStandardMaterial
    LightGreen: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/crops_pack/Rice_4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Rice_4_1.geometry} material={materials.Green} />
        <mesh geometry={nodes.Rice_4_2.geometry} material={materials.LightGreen} />
      </group>
    </group>
  )
}
