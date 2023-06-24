/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Can_Open_1: THREE.Mesh
    Can_Open_2: THREE.Mesh
  }
  materials: {
    LightGrey: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/survival_pack/Can_Open.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Can_Open_1.geometry} material={materials.LightGrey} />
        <mesh geometry={nodes.Can_Open_2.geometry} material={materials.Grey} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/survival_pack/Can_Open.glb')
