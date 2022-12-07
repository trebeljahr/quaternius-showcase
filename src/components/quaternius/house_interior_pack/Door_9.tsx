/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Door_9_1: THREE.Mesh
    Door_9_2: THREE.Mesh
  }
  materials: {
    ['White.001']: THREE.MeshStandardMaterial
    ['Metal.001']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/house_interior_pack/Door_9.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Door_9_1.geometry} material={materials['White.001']} />
        <mesh geometry={nodes.Door_9_2.geometry} material={materials['Metal.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/house_interior_pack/Door_9.glb')
