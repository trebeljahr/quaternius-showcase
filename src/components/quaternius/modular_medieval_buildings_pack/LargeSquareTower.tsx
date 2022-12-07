/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    LargeSquareTower_1: THREE.Mesh
    LargeSquareTower_2: THREE.Mesh
  }
  materials: {
    LightRock: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_medieval_buildings_pack/LargeSquareTower.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.LargeSquareTower_1.geometry} material={materials.LightRock} />
        <mesh geometry={nodes.LargeSquareTower_2.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_medieval_buildings_pack/LargeSquareTower.glb')
