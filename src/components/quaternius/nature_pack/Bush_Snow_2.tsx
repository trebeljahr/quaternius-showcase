/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Bush_Snow_2_1: THREE.Mesh
    Bush_Snow_2_2: THREE.Mesh
  }
  materials: {
    Snow: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/nature_pack/Bush_Snow_2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Bush_Snow_2_1.geometry} material={materials.Snow} />
        <mesh geometry={nodes.Bush_Snow_2_2.geometry} material={materials.Green} />
      </group>
    </group>
  )
}
