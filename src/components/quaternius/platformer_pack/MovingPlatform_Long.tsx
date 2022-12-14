/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    MovingPlatform_Long_1: THREE.Mesh
    MovingPlatform_Long_2: THREE.Mesh
  }
  materials: {
    Yellow: THREE.MeshStandardMaterial
    DarkYellow: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/platformer_pack/MovingPlatform_Long.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.MovingPlatform_Long_1.geometry} material={materials.Yellow} />
        <mesh geometry={nodes.MovingPlatform_Long_2.geometry} material={materials.DarkYellow} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/platformer_pack/MovingPlatform_Long.glb')
