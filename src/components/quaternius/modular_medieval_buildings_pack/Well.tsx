/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Well_1: THREE.Mesh
    Well_2: THREE.Mesh
    Well_3: THREE.Mesh
  }
  materials: {
    LightRock: THREE.MeshStandardMaterial
    LightWood: THREE.MeshStandardMaterial
    Celing: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Well.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Well_1.geometry} material={materials.LightRock} />
        <mesh geometry={nodes.Well_2.geometry} material={materials.LightWood} />
        <mesh geometry={nodes.Well_3.geometry} material={materials.Celing} />
      </group>
    </group>
  )
}

useGLTF.preload('/Well.glb')
