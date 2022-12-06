/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Details_Basic_1_1: THREE.Mesh
    Details_Basic_1_2: THREE.Mesh
  }
  materials: {
    DarkGrey: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Details_Basic_1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Details_Basic_1_1.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.Details_Basic_1_2.geometry} material={materials.Main} />
      </group>
    </group>
  )
}

useGLTF.preload('/Details_Basic_1.glb')
