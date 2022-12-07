/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Couch_Small1_1: THREE.Mesh
    Couch_Small1_2: THREE.Mesh
  }
  materials: {
    Couch_Blue: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/house_interior_pack/Couch_Small1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Couch_Small1_1.geometry} material={materials.Couch_Blue} />
        <mesh geometry={nodes.Couch_Small1_2.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/house_interior_pack/Couch_Small1.glb')
