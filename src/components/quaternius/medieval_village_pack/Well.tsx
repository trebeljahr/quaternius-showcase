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
    Well_4: THREE.Mesh
    Well_5: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Bag: THREE.MeshStandardMaterial
    RoofTiles_Red: THREE.MeshStandardMaterial
    Stone_Dark: THREE.MeshStandardMaterial
    Stone_Light: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/medieval_village_pack/Well.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Well_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Well_2.geometry} material={materials.Bag} />
        <mesh geometry={nodes.Well_3.geometry} material={materials.RoofTiles_Red} />
        <mesh geometry={nodes.Well_4.geometry} material={materials.Stone_Dark} />
        <mesh geometry={nodes.Well_5.geometry} material={materials.Stone_Light} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/medieval_village_pack/Well.glb')
