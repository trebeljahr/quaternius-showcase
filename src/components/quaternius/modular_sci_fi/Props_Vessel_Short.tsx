/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Props_Vessel_Short_1: THREE.Mesh
    Props_Vessel_Short_2: THREE.Mesh
    Props_Vessel_Short_3: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_sci_fi/Props_Vessel_Short.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Props_Vessel_Short_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Props_Vessel_Short_2.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.Props_Vessel_Short_3.geometry} material={materials.Accent} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_sci_fi/Props_Vessel_Short.glb')
