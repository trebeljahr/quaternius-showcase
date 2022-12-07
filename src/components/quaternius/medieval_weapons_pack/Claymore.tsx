/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Claymore_1: THREE.Mesh
    Claymore_2: THREE.Mesh
    Claymore_3: THREE.Mesh
    Claymore_4: THREE.Mesh
    Claymore_5: THREE.Mesh
  }
  materials: {
    DarkSteel: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    DarkBrown: THREE.MeshStandardMaterial
    LightRed: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/medieval_weapons_pack/Claymore.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Claymore_1.geometry} material={materials.DarkSteel} />
        <mesh geometry={nodes.Claymore_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.Claymore_3.geometry} material={materials.DarkBrown} />
        <mesh geometry={nodes.Claymore_4.geometry} material={materials.LightRed} />
        <mesh geometry={nodes.Claymore_5.geometry} material={materials.Red} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/medieval_weapons_pack/Claymore.glb')
