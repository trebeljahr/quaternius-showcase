/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Candle_1: THREE.Mesh
    Candle_2: THREE.Mesh
    Candle_3: THREE.Mesh
  }
  materials: {
    ['Gold.001']: THREE.MeshStandardMaterial
    ['Candle.001']: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_dungeon_pack/Candle.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Candle_1.geometry} material={materials['Gold.001']} />
        <mesh geometry={nodes.Candle_2.geometry} material={materials['Candle.001']} />
        <mesh geometry={nodes.Candle_3.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_dungeon_pack/Candle.glb')
