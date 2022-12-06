/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Lifeboat_1: THREE.Mesh
    Lifeboat_2: THREE.Mesh
    Lifeboat_3: THREE.Mesh
    Lifeboat_4: THREE.Mesh
  }
  materials: {
    Red: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    DarkRed: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Lifeboat.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Lifeboat_1.geometry} material={materials.Red} />
        <mesh geometry={nodes.Lifeboat_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.Lifeboat_3.geometry} material={materials.White} />
        <mesh geometry={nodes.Lifeboat_4.geometry} material={materials.DarkRed} />
      </group>
    </group>
  )
}

useGLTF.preload('/Lifeboat.glb')
