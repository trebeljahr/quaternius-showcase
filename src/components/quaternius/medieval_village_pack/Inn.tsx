/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Inn_1: THREE.Mesh
    Inn_2: THREE.Mesh
    Inn_3: THREE.Mesh
    Inn_4: THREE.Mesh
    Inn_5: THREE.Mesh
    Inn_6: THREE.Mesh
    Inn_7: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    RoofTiles_Red: THREE.MeshStandardMaterial
    Plaster: THREE.MeshStandardMaterial
    Windows: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
    Stone_Dark: THREE.MeshStandardMaterial
    Stone_Light: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/medieval_village_pack/Inn.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Inn_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Inn_2.geometry} material={materials.RoofTiles_Red} />
        <mesh geometry={nodes.Inn_3.geometry} material={materials.Plaster} />
        <mesh geometry={nodes.Inn_4.geometry} material={materials.Windows} />
        <mesh geometry={nodes.Inn_5.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.Inn_6.geometry} material={materials.Stone_Dark} />
        <mesh geometry={nodes.Inn_7.geometry} material={materials.Stone_Light} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/medieval_village_pack/Inn.glb')
