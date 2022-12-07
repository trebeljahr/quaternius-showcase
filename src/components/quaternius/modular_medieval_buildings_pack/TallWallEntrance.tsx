/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    TallWallEntrance_1: THREE.Mesh
    TallWallEntrance_2: THREE.Mesh
  }
  materials: {
    LightRock: THREE.MeshStandardMaterial
    DarkRock: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_medieval_buildings_pack/TallWallEntrance.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[85.5, 18.43, 82.73]}>
        <mesh geometry={nodes.TallWallEntrance_1.geometry} material={materials.LightRock} />
        <mesh geometry={nodes.TallWallEntrance_2.geometry} material={materials.DarkRock} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_medieval_buildings_pack/TallWallEntrance.glb')
