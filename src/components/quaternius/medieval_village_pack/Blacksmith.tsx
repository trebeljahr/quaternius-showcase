/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Blacksmith_1: THREE.Mesh
    Blacksmith_2: THREE.Mesh
    Blacksmith_3: THREE.Mesh
    Blacksmith_4: THREE.Mesh
    Blacksmith_5: THREE.Mesh
    Blacksmith_6: THREE.Mesh
    Blacksmith_7: THREE.Mesh
    Blacksmith_8: THREE.Mesh
  }
  materials: {
    Plaster: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
    Wood_Side: THREE.MeshStandardMaterial
    Stone_Light: THREE.MeshStandardMaterial
    Stone_Dark: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    RoofTiles_Red: THREE.MeshStandardMaterial
    Windows: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/medieval_village_pack/Blacksmith.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Blacksmith_1.geometry} material={materials.Plaster} />
        <mesh geometry={nodes.Blacksmith_2.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.Blacksmith_3.geometry} material={materials.Wood_Side} />
        <mesh geometry={nodes.Blacksmith_4.geometry} material={materials.Stone_Light} />
        <mesh geometry={nodes.Blacksmith_5.geometry} material={materials.Stone_Dark} />
        <mesh geometry={nodes.Blacksmith_6.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Blacksmith_7.geometry} material={materials.RoofTiles_Red} />
        <mesh geometry={nodes.Blacksmith_8.geometry} material={materials.Windows} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/medieval_village_pack/Blacksmith.glb')
