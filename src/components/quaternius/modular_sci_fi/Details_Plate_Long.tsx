/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Details_Plate_Long_1: THREE.Mesh
    Details_Plate_Long_2: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Details_Plate_Long.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Details_Plate_Long_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Details_Plate_Long_2.geometry} material={materials.Accent} />
      </group>
    </group>
  )
}

useGLTF.preload('/Details_Plate_Long.glb')
