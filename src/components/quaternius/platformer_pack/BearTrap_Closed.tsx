/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    BearTrap_Closed: THREE.Mesh
  }
  materials: {
    ['Grey.001']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/platformer_pack/BearTrap_Closed.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.BearTrap_Closed.geometry}
        material={materials['Grey.001']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/glb/platformer_pack/BearTrap_Closed.glb')
