/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Window_Round1_1: THREE.Mesh
    Window_Round1_2: THREE.Mesh
  }
  materials: {
    White: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Window_Round1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Window_Round1_1.geometry} material={materials.White} />
        <mesh geometry={nodes.Window_Round1_2.geometry} material={materials.Glass} />
      </group>
    </group>
  )
}

useGLTF.preload('/Window_Round1.glb')
