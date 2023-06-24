/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Curtains_Single_1: THREE.Mesh
    Curtains_Single_2: THREE.Mesh
  }
  materials: {
    LightMetal: THREE.MeshStandardMaterial
    Couch_Blue: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/house_interior_pack/Curtains_Single.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Curtains_Single_1.geometry} material={materials.LightMetal} />
        <mesh geometry={nodes.Curtains_Single_2.geometry} material={materials.Couch_Blue} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/house_interior_pack/Curtains_Single.glb')
