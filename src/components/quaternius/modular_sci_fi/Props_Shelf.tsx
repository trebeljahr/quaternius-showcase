/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Props_Shelf_1: THREE.Mesh
    Props_Shelf_2: THREE.Mesh
    Props_Shelf_3: THREE.Mesh
  }
  materials: {
    Accent: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Props_Shelf.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Props_Shelf_1.geometry} material={materials.Accent} />
        <mesh geometry={nodes.Props_Shelf_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Props_Shelf_3.geometry} material={materials.DarkGrey} />
      </group>
    </group>
  )
}

useGLTF.preload('/Props_Shelf.glb')
