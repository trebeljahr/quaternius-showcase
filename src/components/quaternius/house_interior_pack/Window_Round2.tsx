/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Window_Round2_1: THREE.Mesh
    Window_Round2_2: THREE.Mesh
  }
  materials: {
    White: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/house_interior_pack/Window_Round2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Window_Round2_1.geometry} material={materials.White} />
        <mesh geometry={nodes.Window_Round2_2.geometry} material={materials.Glass} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/house_interior_pack/Window_Round2.glb')
