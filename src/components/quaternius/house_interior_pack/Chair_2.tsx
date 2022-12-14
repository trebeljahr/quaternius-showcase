/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Chair_2_1: THREE.Mesh
    Chair_2_2: THREE.Mesh
  }
  materials: {
    Wood_Dark: THREE.MeshStandardMaterial
    Cushin: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/house_interior_pack/Chair_2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Chair_2_1.geometry} material={materials.Wood_Dark} />
        <mesh geometry={nodes.Chair_2_2.geometry} material={materials.Cushin} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/house_interior_pack/Chair_2.glb')
