/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Body_Crossbow_2_1: THREE.Mesh
    Body_Crossbow_2_2: THREE.Mesh
    Body_Crossbow_2_3: THREE.Mesh
    Body_Crossbow_2_4: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_sci_fi_guns_pack/Body_Crossbow_2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Body_Crossbow_2_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Body_Crossbow_2_2.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Body_Crossbow_2_3.geometry} material={materials.Main} />
        <mesh geometry={nodes.Body_Crossbow_2_4.geometry} material={materials.White} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_sci_fi_guns_pack/Body_Crossbow_2.glb')
