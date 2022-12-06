/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Bush_2x2: THREE.Mesh
  }
  materials: {
    Texture_Leaves: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Bush_2x2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Bush_2x2.geometry}
        material={materials.Texture_Leaves}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/Bush_2x2.glb')
