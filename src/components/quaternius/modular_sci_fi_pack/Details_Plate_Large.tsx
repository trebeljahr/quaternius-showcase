/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Details_Plate_Large_1: THREE.Mesh
    Details_Plate_Large_2: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_sci_fi/Details_Plate_Large.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Details_Plate_Large_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Details_Plate_Large_2.geometry} material={materials.Accent} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_sci_fi/Details_Plate_Large.glb')
