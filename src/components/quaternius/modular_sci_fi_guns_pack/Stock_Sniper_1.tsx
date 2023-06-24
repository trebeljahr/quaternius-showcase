/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Stock_Sniper_1_1: THREE.Mesh
    Stock_Sniper_1_2: THREE.Mesh
    Stock_Sniper_1_3: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_sci_fi_guns_pack/Stock_Sniper_1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Stock_Sniper_1_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Stock_Sniper_1_2.geometry} material={materials.White} />
        <mesh geometry={nodes.Stock_Sniper_1_3.geometry} material={materials.Main} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_sci_fi_guns_pack/Stock_Sniper_1.glb')
