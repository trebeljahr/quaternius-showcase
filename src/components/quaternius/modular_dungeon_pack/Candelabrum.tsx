/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Candelabrum_1: THREE.Mesh
    Candelabrum_2: THREE.Mesh
    Candelabrum_3: THREE.Mesh
  }
  materials: {
    Gold: THREE.MeshStandardMaterial
    Candle: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Candelabrum.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Candelabrum_1.geometry} material={materials.Gold} />
        <mesh geometry={nodes.Candelabrum_2.geometry} material={materials.Candle} />
        <mesh geometry={nodes.Candelabrum_3.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/Candelabrum.glb')
