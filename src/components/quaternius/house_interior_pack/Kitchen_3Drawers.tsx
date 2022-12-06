/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Kitchen_3Drawers_1: THREE.Mesh
    Kitchen_3Drawers_2: THREE.Mesh
    Kitchen_3Drawers_3: THREE.Mesh
  }
  materials: {
    KitchenTop: THREE.MeshStandardMaterial
    Kitchen: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Kitchen_3Drawers.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Kitchen_3Drawers_1.geometry} material={materials.KitchenTop} />
        <mesh geometry={nodes.Kitchen_3Drawers_2.geometry} material={materials.Kitchen} />
        <mesh geometry={nodes.Kitchen_3Drawers_3.geometry} material={materials.White} />
      </group>
    </group>
  )
}

useGLTF.preload('/Kitchen_3Drawers.glb')
