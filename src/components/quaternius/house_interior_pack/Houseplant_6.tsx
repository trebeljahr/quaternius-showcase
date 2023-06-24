/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Houseplant_6_1: THREE.Mesh
    Houseplant_6_2: THREE.Mesh
    Houseplant_6_3: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
    Plant_Green: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/house_interior_pack/Houseplant_6.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Houseplant_6_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Houseplant_6_2.geometry} material={materials.Brown} />
        <mesh geometry={nodes.Houseplant_6_3.geometry} material={materials.Plant_Green} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/house_interior_pack/Houseplant_6.glb')
