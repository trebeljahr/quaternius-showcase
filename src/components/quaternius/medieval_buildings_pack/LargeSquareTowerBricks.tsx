/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    LargeSquareTowerBricks_1: THREE.Mesh
    LargeSquareTowerBricks_2: THREE.Mesh
    LargeSquareTowerBricks_3: THREE.Mesh
  }
  materials: {
    ['LightRock.001']: THREE.MeshStandardMaterial
    ['Black.001']: THREE.MeshStandardMaterial
    DarkRock: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_medieval_buildings_pack/LargeSquareTowerBricks.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.LargeSquareTowerBricks_1.geometry} material={materials['LightRock.001']} />
        <mesh geometry={nodes.LargeSquareTowerBricks_2.geometry} material={materials['Black.001']} />
        <mesh geometry={nodes.LargeSquareTowerBricks_3.geometry} material={materials.DarkRock} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_medieval_buildings_pack/LargeSquareTowerBricks.glb')