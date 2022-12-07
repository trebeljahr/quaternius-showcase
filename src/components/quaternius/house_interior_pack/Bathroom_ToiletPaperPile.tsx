/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Bathroom_ToiletPaperPile_1: THREE.Mesh
    Bathroom_ToiletPaperPile_2: THREE.Mesh
  }
  materials: {
    Brown: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/house_interior_pack/Bathroom_ToiletPaperPile.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Bathroom_ToiletPaperPile_1.geometry} material={materials.Brown} />
        <mesh geometry={nodes.Bathroom_ToiletPaperPile_2.geometry} material={materials.White} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/house_interior_pack/Bathroom_ToiletPaperPile.glb')
