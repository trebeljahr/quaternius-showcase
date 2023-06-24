/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Props_Computer_1: THREE.Mesh
    Props_Computer_2: THREE.Mesh
    Props_Computer_3: THREE.Mesh
    Props_Computer_4: THREE.Mesh
    Props_Computer_5: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    DarkAccent: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_sci_fi/Props_Computer.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Props_Computer_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Props_Computer_2.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.Props_Computer_3.geometry} material={materials.Accent} />
        <mesh geometry={nodes.Props_Computer_4.geometry} material={materials.Black} />
        <mesh geometry={nodes.Props_Computer_5.geometry} material={materials.DarkAccent} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_sci_fi/Props_Computer.glb')
