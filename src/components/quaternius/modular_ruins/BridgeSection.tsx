/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    BridgeSection_1: THREE.Mesh
    BridgeSection_2: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Highlights: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/BridgeSection.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.BridgeSection_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.BridgeSection_2.geometry} material={materials.Highlights} />
      </group>
    </group>
  )
}

useGLTF.preload('/BridgeSection.glb')
