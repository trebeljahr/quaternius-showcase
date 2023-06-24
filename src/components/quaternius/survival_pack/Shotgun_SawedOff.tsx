/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Shotgun_SawedOff_1: THREE.Mesh
    Shotgun_SawedOff_2: THREE.Mesh
    Shotgun_SawedOff_3: THREE.Mesh
    Shotgun_SawedOff_4: THREE.Mesh
    Shotgun_SawedOff_5: THREE.Mesh
  }
  materials: {
    DarkMetal: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    DarkWood: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/survival_pack/Shotgun_SawedOff.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Shotgun_SawedOff_1.geometry} material={materials.DarkMetal} />
        <mesh geometry={nodes.Shotgun_SawedOff_2.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Shotgun_SawedOff_3.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Shotgun_SawedOff_4.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Shotgun_SawedOff_5.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/survival_pack/Shotgun_SawedOff.glb')
