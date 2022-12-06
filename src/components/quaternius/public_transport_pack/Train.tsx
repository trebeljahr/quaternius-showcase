/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Train_1: THREE.Mesh
    Train_2: THREE.Mesh
    Train_3: THREE.Mesh
    Train_4: THREE.Mesh
  }
  materials: {
    Outside: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Windows: THREE.MeshStandardMaterial
    Top: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Train.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.08, -1.52]} rotation={[-Math.PI / 2, 0, 0]} scale={130.25}>
        <mesh geometry={nodes.Train_1.geometry} material={materials.Outside} />
        <mesh geometry={nodes.Train_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.Train_3.geometry} material={materials.Windows} />
        <mesh geometry={nodes.Train_4.geometry} material={materials.Top} />
      </group>
    </group>
  )
}

useGLTF.preload('/Train.glb')
