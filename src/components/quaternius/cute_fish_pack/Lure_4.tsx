/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { DoubleSide } from 'three'

type GLTFResult = GLTF & {
  nodes: {
    Lure_4_1: THREE.Mesh
    Lure_4_2: THREE.Mesh
    Lure_4_3: THREE.Mesh
    Lure_4_4: THREE.Mesh
    Lure_4_5: THREE.Mesh
    Lure_4_6: THREE.Mesh
  }
  materials: {
    Lure_Yellow: THREE.MeshStandardMaterial
    Lure_Green: THREE.MeshStandardMaterial
    Lure_Red: THREE.MeshStandardMaterial
    Lure_Blue: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/cute_fish_pack/Lure_4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 2.29]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Lure_4_1.geometry} material={materials.Lure_Yellow} />
        <mesh geometry={nodes.Lure_4_2.geometry} material={materials.Lure_Green} />
        <mesh geometry={nodes.Lure_4_3.geometry} material={materials.Lure_Red} />
        <mesh geometry={nodes.Lure_4_4.geometry} material={materials.Lure_Blue} />
        <mesh geometry={nodes.Lure_4_5.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Lure_4_6.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cute_fish_pack/Lure_4.glb')
