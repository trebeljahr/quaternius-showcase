/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Ring4_1: THREE.Mesh
    Ring4_2: THREE.Mesh
  }
  materials: {
    Golden: THREE.MeshStandardMaterial
    Cyan: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/rpg_items_pack/Ring4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Ring4_1.geometry} material={materials.Golden} />
        <mesh geometry={nodes.Ring4_2.geometry} material={materials.Cyan} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/rpg_items_pack/Ring4.glb')
