/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Shield_Round_1: THREE.Mesh
    Shield_Round_2: THREE.Mesh
    Shield_Round_3: THREE.Mesh
    Shield_Round_4: THREE.Mesh
  }
  materials: {
    LightWood: THREE.MeshStandardMaterial
    Steel: THREE.MeshStandardMaterial
    DarkWood: THREE.MeshStandardMaterial
    LightSteel: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Shield_Round.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Shield_Round_1.geometry} material={materials.LightWood} />
        <mesh geometry={nodes.Shield_Round_2.geometry} material={materials.Steel} />
        <mesh geometry={nodes.Shield_Round_3.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Shield_Round_4.geometry} material={materials.LightSteel} />
      </group>
    </group>
  )
}

useGLTF.preload('/Shield_Round.glb')
