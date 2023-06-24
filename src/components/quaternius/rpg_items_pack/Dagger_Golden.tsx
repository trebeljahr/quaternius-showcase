/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Dagger_Golden_1: THREE.Mesh
    Dagger_Golden_2: THREE.Mesh
    Dagger_Golden_3: THREE.Mesh
    Dagger_Golden_4: THREE.Mesh
    Dagger_Golden_5: THREE.Mesh
  }
  materials: {
    DarkSteel: THREE.MeshStandardMaterial
    DarkWood: THREE.MeshStandardMaterial
    LightWood: THREE.MeshStandardMaterial
    LightGold: THREE.MeshStandardMaterial
    Golden: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/rpg_items_pack/Dagger_Golden.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Dagger_Golden_1.geometry} material={materials.DarkSteel} />
        <mesh geometry={nodes.Dagger_Golden_2.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Dagger_Golden_3.geometry} material={materials.LightWood} />
        <mesh geometry={nodes.Dagger_Golden_4.geometry} material={materials.LightGold} />
        <mesh geometry={nodes.Dagger_Golden_5.geometry} material={materials.Golden} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/rpg_items_pack/Dagger_Golden.glb')
