/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Arrow_1: THREE.Mesh
    Arrow_2: THREE.Mesh
    Arrow_3: THREE.Mesh
    Arrow_4: THREE.Mesh
  }
  materials: {
    DarkRed: THREE.MeshStandardMaterial
    LightWood: THREE.MeshStandardMaterial
    Steel: THREE.MeshStandardMaterial
    LightSteel: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Arrow.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Arrow_1.geometry} material={materials.DarkRed} />
        <mesh geometry={nodes.Arrow_2.geometry} material={materials.LightWood} />
        <mesh geometry={nodes.Arrow_3.geometry} material={materials.Steel} />
        <mesh geometry={nodes.Arrow_4.geometry} material={materials.LightSteel} />
      </group>
    </group>
  )
}

useGLTF.preload('/Arrow.glb')
