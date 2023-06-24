/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    House_2_1: THREE.Mesh
    House_2_2: THREE.Mesh
    House_2_3: THREE.Mesh
    House_2_4: THREE.Mesh
    House_2_5: THREE.Mesh
    House_2_6: THREE.Mesh
    House_2_7: THREE.Mesh
    House_2_8: THREE.Mesh
    House_2_9: THREE.Mesh
  }
  materials: {
    Stone_Dark: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Beige: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
    Windows: THREE.MeshStandardMaterial
    RoofTiles: THREE.MeshStandardMaterial
    Wood_Side: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
    Stone_Light: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/medieval_village_pack/House_2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.House_2_1.geometry} material={materials.Stone_Dark} />
        <mesh geometry={nodes.House_2_2.geometry} material={materials.Wood} />
        <mesh geometry={nodes.House_2_3.geometry} material={materials.Beige} />
        <mesh geometry={nodes.House_2_4.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.House_2_5.geometry} material={materials.Windows} />
        <mesh geometry={nodes.House_2_6.geometry} material={materials.RoofTiles} />
        <mesh geometry={nodes.House_2_7.geometry} material={materials.Wood_Side} />
        <mesh geometry={nodes.House_2_8.geometry} material={materials.Stone} />
        <mesh geometry={nodes.House_2_9.geometry} material={materials.Stone_Light} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/medieval_village_pack/House_2.glb')
