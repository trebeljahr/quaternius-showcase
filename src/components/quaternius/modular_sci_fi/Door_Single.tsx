/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Door_Single_1: THREE.Mesh
    Door_Single_2: THREE.Mesh
    Door_Single_3: THREE.Mesh
    Door_Single_4: THREE.Mesh
    Door_Single_5: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
    DarkAccent: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Door_Single.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Door_Single_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Door_Single_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Door_Single_3.geometry} material={materials.Accent} />
        <mesh geometry={nodes.Door_Single_4.geometry} material={materials.DarkAccent} />
        <mesh geometry={nodes.Door_Single_5.geometry} material={materials.DarkGrey} />
      </group>
    </group>
  )
}

useGLTF.preload('/Door_Single.glb')
