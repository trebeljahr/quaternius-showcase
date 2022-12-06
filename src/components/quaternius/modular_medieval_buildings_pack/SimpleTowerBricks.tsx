/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    SimpleTowerBricks_1: THREE.Mesh
    SimpleTowerBricks_2: THREE.Mesh
    SimpleTowerBricks_3: THREE.Mesh
    SimpleTowerBricks_4: THREE.Mesh
  }
  materials: {
    ['LightRock.002']: THREE.MeshStandardMaterial
    ['DarkRock.001']: THREE.MeshStandardMaterial
    Celing: THREE.MeshStandardMaterial
    ['Black.002']: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/SimpleTowerBricks.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.SimpleTowerBricks_1.geometry} material={materials['LightRock.002']} />
        <mesh geometry={nodes.SimpleTowerBricks_2.geometry} material={materials['DarkRock.001']} />
        <mesh geometry={nodes.SimpleTowerBricks_3.geometry} material={materials.Celing} />
        <mesh geometry={nodes.SimpleTowerBricks_4.geometry} material={materials['Black.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('/SimpleTowerBricks.glb')
