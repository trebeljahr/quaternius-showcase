/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Couch_Large1_1: THREE.Mesh
    Couch_Large1_2: THREE.Mesh
  }
  materials: {
    DarkRed: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Couch_Large1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Couch_Large1_1.geometry} material={materials.DarkRed} />
        <mesh geometry={nodes.Couch_Large1_2.geometry} material={materials.Red} />
      </group>
    </group>
  )
}

useGLTF.preload('/Couch_Large1.glb')
