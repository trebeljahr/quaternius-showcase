/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    SmallSquareTower_1: THREE.Mesh
    SmallSquareTower_2: THREE.Mesh
  }
  materials: {
    LightRock: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/SmallSquareTower.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.SmallSquareTower_1.geometry} material={materials.LightRock} />
        <mesh geometry={nodes.SmallSquareTower_2.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/SmallSquareTower.glb')
