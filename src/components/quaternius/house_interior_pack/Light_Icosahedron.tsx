/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Light_Icosahedron_1: THREE.Mesh
    Light_Icosahedron_2: THREE.Mesh
    Light_Icosahedron_3: THREE.Mesh
    Light_Icosahedron_4: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    LightMetal: THREE.MeshStandardMaterial
    Light: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/house_interior_pack/Light_Icosahedron.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Light_Icosahedron_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Light_Icosahedron_2.geometry} material={materials.LightMetal} />
        <mesh geometry={nodes.Light_Icosahedron_3.geometry} material={materials.Light} />
        <mesh geometry={nodes.Light_Icosahedron_4.geometry} material={materials.White} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/house_interior_pack/Light_Icosahedron.glb')
