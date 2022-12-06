/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Rock_Moss_4_1: THREE.Mesh
    Rock_Moss_4_2: THREE.Mesh
  }
  materials: {
    Rock: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Rock_Moss_4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Rock_Moss_4_1.geometry} material={materials.Rock} />
        <mesh geometry={nodes.Rock_Moss_4_2.geometry} material={materials.Green} />
      </group>
    </group>
  )
}
