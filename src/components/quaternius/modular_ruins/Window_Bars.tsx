/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Window_Bars_1: THREE.Mesh
    Window_Bars_2: THREE.Mesh
    Window_Bars_3: THREE.Mesh
  }
  materials: {
    Highlights: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_ruins/Window_Bars.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI, 0, 0]} scale={[100, 100, 5.97]}>
        <mesh geometry={nodes.Window_Bars_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Window_Bars_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Window_Bars_3.geometry} material={materials.Metal} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_ruins/Window_Bars.glb')
