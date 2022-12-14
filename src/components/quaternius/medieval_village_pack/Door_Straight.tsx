/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Door_Straight_1: THREE.Mesh
    Door_Straight_2: THREE.Mesh
    Door_Straight_3: THREE.Mesh
    Door_Straight_4: THREE.Mesh
    Door_Straight_5: THREE.Mesh
  }
  materials: {
    Stone_Light: THREE.MeshStandardMaterial
    Stone_Dark: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/medieval_village_pack/Door_Straight.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Door_Straight_1.geometry} material={materials.Stone_Light} />
        <mesh geometry={nodes.Door_Straight_2.geometry} material={materials.Stone_Dark} />
        <mesh geometry={nodes.Door_Straight_3.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Door_Straight_4.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.Door_Straight_5.geometry} material={materials.Metal} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/medieval_village_pack/Door_Straight.glb')
