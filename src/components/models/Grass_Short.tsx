/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Grass_Short: THREE.Mesh
  }
  materials: {
    Green: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Grass_Short.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Grass_Short.geometry}
        material={materials.Green}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 33.68]}
      />
    </group>
  )
}

useGLTF.preload('/Grass_Short.glb')
