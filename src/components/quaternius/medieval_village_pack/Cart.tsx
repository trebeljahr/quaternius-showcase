/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cart_1: THREE.Mesh
    Cart_2: THREE.Mesh
    Cart_3: THREE.Mesh
    Cart_4: THREE.Mesh
    Cart_5: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
    Beige: THREE.MeshStandardMaterial
    DarkWood: THREE.MeshStandardMaterial
    Stone_Dark: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/medieval_village_pack/Cart.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cart_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Cart_2.geometry} material={materials.Red} />
        <mesh geometry={nodes.Cart_3.geometry} material={materials.Beige} />
        <mesh geometry={nodes.Cart_4.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Cart_5.geometry} material={materials.Stone_Dark} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/medieval_village_pack/Cart.glb')
