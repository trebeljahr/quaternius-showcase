/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Willow_Snow_5_1: THREE.Mesh
    Willow_Snow_5_2: THREE.Mesh
    Willow_Snow_5_3: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    DarkGreen: THREE.MeshStandardMaterial
    Snow: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/nature_pack/Willow_Snow_5.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Willow_Snow_5_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Willow_Snow_5_2.geometry} material={materials.DarkGreen} />
        <mesh geometry={nodes.Willow_Snow_5_3.geometry} material={materials.Snow} />
      </group>
    </group>
  )
}
