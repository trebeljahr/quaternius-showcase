/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    BushBerries_4_1: THREE.Mesh
    BushBerries_4_2: THREE.Mesh
  }
  materials: {
    Green_Bush: THREE.MeshStandardMaterial
    Berry: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/crops_pack/BushBerries_4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.BushBerries_4_1.geometry} material={materials.Green_Bush} />
        <mesh geometry={nodes.BushBerries_4_2.geometry} material={materials.Berry} />
      </group>
    </group>
  )
}
