/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Wall_Overgrown_1: THREE.Mesh
    Wall_Overgrown_2: THREE.Mesh
    Wall_Overgrown_3: THREE.Mesh
    Wall_Overgrown_4: THREE.Mesh
  }
  materials: {
    Highlights: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Leaf_Texture: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_ruins/Wall_Overgrown.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Wall_Overgrown_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Wall_Overgrown_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Wall_Overgrown_3.geometry} material={materials.Leaf_Texture} />
        <mesh geometry={nodes.Wall_Overgrown_4.geometry} material={materials.Green} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_ruins/Wall_Overgrown.glb')
