/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Kitchen_Fridge_1: THREE.Mesh
    Kitchen_Fridge_2: THREE.Mesh
  }
  materials: {
    White: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Kitchen_Fridge.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Kitchen_Fridge_1.geometry} material={materials.White} />
        <mesh geometry={nodes.Kitchen_Fridge_2.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/Kitchen_Fridge.glb')
