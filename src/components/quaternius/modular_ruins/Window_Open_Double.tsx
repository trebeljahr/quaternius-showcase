/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Window_Open_Double_1: THREE.Mesh
    Window_Open_Double_2: THREE.Mesh
  }
  materials: {
    Highlights: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Window_Open_Double.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI, 0, 0]} scale={[100, 100, 5.97]}>
        <mesh geometry={nodes.Window_Open_Double_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Window_Open_Double_2.geometry} material={materials.Main} />
      </group>
    </group>
  )
}

useGLTF.preload('/Window_Open_Double.glb')
