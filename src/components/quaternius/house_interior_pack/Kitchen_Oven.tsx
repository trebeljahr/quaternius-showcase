/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Kitchen_Oven_1: THREE.Mesh
    Kitchen_Oven_2: THREE.Mesh
    Kitchen_Oven_3: THREE.Mesh
    Kitchen_Oven_4: THREE.Mesh
    Kitchen_Oven_5: THREE.Mesh
    Kitchen_Oven_6: THREE.Mesh
  }
  materials: {
    KitchenTop: THREE.MeshStandardMaterial
    Kitchen: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    DarkMetal: THREE.MeshStandardMaterial
    LightMetal: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/house_interior_pack/Kitchen_Oven.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Kitchen_Oven_1.geometry} material={materials.KitchenTop} />
        <mesh geometry={nodes.Kitchen_Oven_2.geometry} material={materials.Kitchen} />
        <mesh geometry={nodes.Kitchen_Oven_3.geometry} material={materials.White} />
        <mesh geometry={nodes.Kitchen_Oven_4.geometry} material={materials.DarkMetal} />
        <mesh geometry={nodes.Kitchen_Oven_5.geometry} material={materials.LightMetal} />
        <mesh geometry={nodes.Kitchen_Oven_6.geometry} material={materials.Glass} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/house_interior_pack/Kitchen_Oven.glb')
