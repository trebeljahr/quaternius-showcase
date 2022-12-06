/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Details_Triangles: THREE.Mesh
  }
  materials: {
    Accent: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Details_Triangles.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Details_Triangles.geometry}
        material={materials.Accent}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/Details_Triangles.glb')
