/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Armor_Leather: THREE.Mesh
  }
  materials: {
    Brown: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Armor_Leather.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Armor_Leather.geometry}
        material={materials.Brown}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/Armor_Leather.glb')
