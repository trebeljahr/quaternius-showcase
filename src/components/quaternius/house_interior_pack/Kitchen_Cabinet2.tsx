/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Kitchen_Cabinet2_1: THREE.Mesh
    Kitchen_Cabinet2_2: THREE.Mesh
  }
  materials: {
    Kitchen: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Kitchen_Cabinet2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Kitchen_Cabinet2_1.geometry} material={materials.Kitchen} />
        <mesh geometry={nodes.Kitchen_Cabinet2_2.geometry} material={materials.White} />
      </group>
    </group>
  )
}

useGLTF.preload('/Kitchen_Cabinet2.glb')
