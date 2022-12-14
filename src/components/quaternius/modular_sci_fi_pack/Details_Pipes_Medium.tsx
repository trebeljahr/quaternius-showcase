/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Details_Pipes_Medium_1: THREE.Mesh
    Details_Pipes_Medium_2: THREE.Mesh
    Details_Pipes_Medium_3: THREE.Mesh
    Details_Pipes_Medium_4: THREE.Mesh
  }
  materials: {
    DarkGrey: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
    DarkAccent: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_sci_fi/Details_Pipes_Medium.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Details_Pipes_Medium_1.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.Details_Pipes_Medium_2.geometry} material={materials.Accent} />
        <mesh geometry={nodes.Details_Pipes_Medium_3.geometry} material={materials.DarkAccent} />
        <mesh geometry={nodes.Details_Pipes_Medium_4.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_sci_fi/Details_Pipes_Medium.glb')
