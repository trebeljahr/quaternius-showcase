/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Couch_Small2_1: THREE.Mesh
    Couch_Small2_2: THREE.Mesh
  }
  materials: {
    Couch_BeigeDark: THREE.MeshStandardMaterial
    Couch_Beige: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Couch_Small2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Couch_Small2_1.geometry} material={materials.Couch_BeigeDark} />
        <mesh geometry={nodes.Couch_Small2_2.geometry} material={materials.Couch_Beige} />
      </group>
    </group>
  )
}

useGLTF.preload('/Couch_Small2.glb')
