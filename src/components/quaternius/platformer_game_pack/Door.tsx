/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Door_1: THREE.Mesh
    Door_2: THREE.Mesh
    Door_3: THREE.Mesh
    Door_Frame: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
    Door_Metal: THREE.MeshStandardMaterial
    Door_Frame: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/platformer_game_pack/Door.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[1.21, 2.21, 0.36]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Door_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Door_2.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.Door_3.geometry} material={materials.Door_Metal} />
      </group>
      <mesh geometry={nodes.Door_Frame.geometry} material={materials.Door_Frame} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/glb/platformer_game_pack/Door.glb')
