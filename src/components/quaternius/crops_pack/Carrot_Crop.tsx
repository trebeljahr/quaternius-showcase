/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Carrot_Crop_1: THREE.Mesh
    Carrot_Crop_2: THREE.Mesh
    Carrot_Crop_3: THREE.Mesh
  }
  materials: {
    Green: THREE.MeshStandardMaterial
    DarkGreen2: THREE.MeshStandardMaterial
    LightOrange: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Carrot_Crop.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Carrot_Crop_1.geometry} material={materials.Green} />
        <mesh geometry={nodes.Carrot_Crop_2.geometry} material={materials.DarkGreen2} />
        <mesh geometry={nodes.Carrot_Crop_3.geometry} material={materials.LightOrange} />
      </group>
    </group>
  )
}
