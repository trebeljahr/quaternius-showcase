/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Book3_Open_1: THREE.Mesh
    Book3_Open_2: THREE.Mesh
    Book3_Open_3: THREE.Mesh
  }
  materials: {
    DarkBrown: THREE.MeshStandardMaterial
    Beige: THREE.MeshStandardMaterial
    Gold: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Book3_Open.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Book3_Open_1.geometry} material={materials.DarkBrown} />
        <mesh geometry={nodes.Book3_Open_2.geometry} material={materials.Beige} />
        <mesh geometry={nodes.Book3_Open_3.geometry} material={materials.Gold} />
      </group>
    </group>
  )
}

useGLTF.preload('/Book3_Open.glb')
