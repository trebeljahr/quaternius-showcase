/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Houseplant_3_1: THREE.Mesh
    Houseplant_3_2: THREE.Mesh
    Houseplant_3_3: THREE.Mesh
    Houseplant_3_4: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
    DarkGreen: THREE.MeshStandardMaterial
    LightOrange: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/house_interior_pack/Houseplant_3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Houseplant_3_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Houseplant_3_2.geometry} material={materials.Brown} />
        <mesh geometry={nodes.Houseplant_3_3.geometry} material={materials.DarkGreen} />
        <mesh geometry={nodes.Houseplant_3_4.geometry} material={materials.LightOrange} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/house_interior_pack/Houseplant_3.glb')
