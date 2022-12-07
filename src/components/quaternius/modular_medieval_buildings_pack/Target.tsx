/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Target_1: THREE.Mesh
    Target_2: THREE.Mesh
    Target_3: THREE.Mesh
  }
  materials: {
    White: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
    DarkWood: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_medieval_buildings_pack/Target.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Target_1.geometry} material={materials.White} />
        <mesh geometry={nodes.Target_2.geometry} material={materials.Red} />
        <mesh geometry={nodes.Target_3.geometry} material={materials.DarkWood} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_medieval_buildings_pack/Target.glb')
