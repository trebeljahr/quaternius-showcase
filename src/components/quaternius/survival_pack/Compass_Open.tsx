/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Compass_Open_1: THREE.Mesh
    Compass_Open_2: THREE.Mesh
    Compass_Open_3: THREE.Mesh
    Compass_Open_4: THREE.Mesh
    Compass_Open_5: THREE.Mesh
  }
  materials: {
    Yellow: THREE.MeshStandardMaterial
    DarkYellow: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/survival_pack/Compass_Open.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Compass_Open_1.geometry} material={materials.Yellow} />
        <mesh geometry={nodes.Compass_Open_2.geometry} material={materials.DarkYellow} />
        <mesh geometry={nodes.Compass_Open_3.geometry} material={materials.Black} />
        <mesh geometry={nodes.Compass_Open_4.geometry} material={materials.Red} />
        <mesh geometry={nodes.Compass_Open_5.geometry} material={materials.White} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/survival_pack/Compass_Open.glb')
