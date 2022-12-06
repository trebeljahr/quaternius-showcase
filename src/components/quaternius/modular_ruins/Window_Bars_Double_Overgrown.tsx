/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Window_Bars_Double_Overgrown_1: THREE.Mesh
    Window_Bars_Double_Overgrown_2: THREE.Mesh
    Window_Bars_Double_Overgrown_3: THREE.Mesh
    Window_Bars_Double_Overgrown_4: THREE.Mesh
    Window_Bars_Double_Overgrown_5: THREE.Mesh
  }
  materials: {
    Highlights: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
    Leaf_Texture: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Window_Bars_Double_Overgrown.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Window_Bars_Double_Overgrown_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Window_Bars_Double_Overgrown_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Window_Bars_Double_Overgrown_3.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Window_Bars_Double_Overgrown_4.geometry} material={materials.Green} />
        <mesh geometry={nodes.Window_Bars_Double_Overgrown_5.geometry} material={materials.Leaf_Texture} />
      </group>
    </group>
  )
}

useGLTF.preload('/Window_Bars_Double_Overgrown.glb')
