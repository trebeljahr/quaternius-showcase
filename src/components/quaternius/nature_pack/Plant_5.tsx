/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plant_5_1: THREE.Mesh
    Plant_5_2: THREE.Mesh
  }
  materials: {
    Yellow: THREE.MeshStandardMaterial
    Pink: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/nature_pack/Plant_5.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Plant_5_1.geometry} material={materials.Yellow} />
        <mesh geometry={nodes.Plant_5_2.geometry} material={materials.Pink} />
      </group>
    </group>
  )
}
