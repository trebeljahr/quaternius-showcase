/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Bow_Golden_1: THREE.Mesh
    Bow_Golden_2: THREE.Mesh
    Bow_Golden_3: THREE.Mesh
  }
  materials: {
    Gold: THREE.MeshStandardMaterial
    LightWood: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/medieval_weapons_pack/Bow_Golden.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Bow_Golden_1.geometry} material={materials.Gold} />
        <mesh geometry={nodes.Bow_Golden_2.geometry} material={materials.LightWood} />
        <mesh geometry={nodes.Bow_Golden_3.geometry} material={materials.White} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/medieval_weapons_pack/Bow_Golden.glb')
