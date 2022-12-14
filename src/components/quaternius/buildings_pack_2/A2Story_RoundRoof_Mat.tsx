/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['2Story_RoundRoof_Mat_1']: THREE.Mesh
    ['2Story_RoundRoof_Mat_2']: THREE.Mesh
    ['2Story_RoundRoof_Mat_3']: THREE.Mesh
    ['2Story_RoundRoof_Mat_4']: THREE.Mesh
    ['2Story_RoundRoof_Mat_5']: THREE.Mesh
  }
  materials: {
    Dark: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Bricks: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    DarkBrown: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/buildings_pack_3/2Story_RoundRoof_Mat.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes['2Story_RoundRoof_Mat_1'].geometry} material={materials.Dark} />
        <mesh geometry={nodes['2Story_RoundRoof_Mat_2'].geometry} material={materials.Main} />
        <mesh geometry={nodes['2Story_RoundRoof_Mat_3'].geometry} material={materials.Bricks} />
        <mesh geometry={nodes['2Story_RoundRoof_Mat_4'].geometry} material={materials.White} />
        <mesh geometry={nodes['2Story_RoundRoof_Mat_5'].geometry} material={materials.DarkBrown} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/buildings_pack_3/2Story_RoundRoof_Mat.glb')
