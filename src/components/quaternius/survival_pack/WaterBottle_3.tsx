/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    WaterBottle_3_1: THREE.Mesh
    WaterBottle_3_2: THREE.Mesh
    WaterBottle_3_3: THREE.Mesh
  }
  materials: {
    Plastic: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/survival_pack/WaterBottle_3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={198.94}>
        <mesh geometry={nodes.WaterBottle_3_1.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.WaterBottle_3_2.geometry} material={materials.Grey} />
        <mesh geometry={nodes.WaterBottle_3_3.geometry} material={materials.Red} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/survival_pack/WaterBottle_3.glb')
