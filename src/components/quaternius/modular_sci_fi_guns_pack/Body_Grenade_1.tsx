/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Body_Grenade_1_1: THREE.Mesh
    Body_Grenade_1_2: THREE.Mesh
    Body_Grenade_1_3: THREE.Mesh
  }
  materials: {
    White: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Body_Grenade_1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Body_Grenade_1_1.geometry} material={materials.White} />
        <mesh geometry={nodes.Body_Grenade_1_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Body_Grenade_1_3.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/Body_Grenade_1.glb')
