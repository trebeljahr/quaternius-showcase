/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Axe_Double_1: THREE.Mesh
    Axe_Double_2: THREE.Mesh
    Axe_Double_3: THREE.Mesh
    Axe_Double_4: THREE.Mesh
  }
  materials: {
    DarkWood: THREE.MeshStandardMaterial
    LightWood: THREE.MeshStandardMaterial
    Steel: THREE.MeshStandardMaterial
    LightSteel: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Axe_Double.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Axe_Double_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Axe_Double_2.geometry} material={materials.LightWood} />
        <mesh geometry={nodes.Axe_Double_3.geometry} material={materials.Steel} />
        <mesh geometry={nodes.Axe_Double_4.geometry} material={materials.LightSteel} />
      </group>
    </group>
  )
}

useGLTF.preload('/Axe_Double.glb')
