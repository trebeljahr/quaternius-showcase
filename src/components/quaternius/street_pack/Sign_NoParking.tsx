/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Parking_1: THREE.Mesh
    Parking_2: THREE.Mesh
    Parking_3: THREE.Mesh
    Parking_4: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    ['Red.001']: THREE.MeshStandardMaterial
    ['Pole.002']: THREE.MeshStandardMaterial
    ['White.002']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/street_pack/Sign_NoParking.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Parking_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Parking_2.geometry} material={materials['Red.001']} />
        <mesh geometry={nodes.Parking_3.geometry} material={materials['Pole.002']} />
        <mesh geometry={nodes.Parking_4.geometry} material={materials['White.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/street_pack/Sign_NoParking.glb')
