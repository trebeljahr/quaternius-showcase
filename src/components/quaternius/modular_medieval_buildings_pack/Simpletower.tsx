/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    SimpleTower_1: THREE.Mesh
    SimpleTower_2: THREE.Mesh
    SimpleTower_3: THREE.Mesh
    SimpleTower_4: THREE.Mesh
  }
  materials: {
    LightRock: THREE.MeshStandardMaterial
    DarkRock: THREE.MeshStandardMaterial
    Celing: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Simpletower.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.SimpleTower_1.geometry} material={materials.LightRock} />
        <mesh geometry={nodes.SimpleTower_2.geometry} material={materials.DarkRock} />
        <mesh geometry={nodes.SimpleTower_3.geometry} material={materials.Celing} />
        <mesh geometry={nodes.SimpleTower_4.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/Simpletower.glb')
