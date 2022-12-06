/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Door_Round_1: THREE.Mesh
    Door_Round_2: THREE.Mesh
    Door_Round_3: THREE.Mesh
    Door_Round_4: THREE.Mesh
  }
  materials: {
    Stone_Dark: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
    Stone_Light: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Door_Round.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Door_Round_1.geometry} material={materials.Stone_Dark} />
        <mesh geometry={nodes.Door_Round_2.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Door_Round_3.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.Door_Round_4.geometry} material={materials.Stone_Light} />
      </group>
    </group>
  )
}

useGLTF.preload('/Door_Round.glb')
