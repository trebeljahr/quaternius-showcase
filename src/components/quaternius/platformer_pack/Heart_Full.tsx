/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Heart_Full: THREE.Mesh
  }
  materials: {
    Red: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/platformer_pack/Heart_Full.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Heart_Full.geometry} material={materials.Red} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/glb/platformer_pack/Heart_Full.glb')
