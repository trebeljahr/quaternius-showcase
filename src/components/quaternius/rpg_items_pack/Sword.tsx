/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Sword_1: THREE.Mesh
    Sword_2: THREE.Mesh
    Sword_3: THREE.Mesh
    Sword_4: THREE.Mesh
    Sword_5: THREE.Mesh
  }
  materials: {
    DarkSteel: THREE.MeshStandardMaterial
    DarkWood: THREE.MeshStandardMaterial
    LightWood: THREE.MeshStandardMaterial
    LightSteel: THREE.MeshStandardMaterial
    Steel: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/rpg_items_pack/Sword.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Sword_1.geometry} material={materials.DarkSteel} />
        <mesh geometry={nodes.Sword_2.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Sword_3.geometry} material={materials.LightWood} />
        <mesh geometry={nodes.Sword_4.geometry} material={materials.LightSteel} />
        <mesh geometry={nodes.Sword_5.geometry} material={materials.Steel} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/rpg_items_pack/Sword.glb')
