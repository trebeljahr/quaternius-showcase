/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Path_Straight_1: THREE.Mesh
    Path_Straight_2: THREE.Mesh
  }
  materials: {
    Stone_Light: THREE.MeshStandardMaterial
    Stone_Dark: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/medieval_village_pack/Path_Straight.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Path_Straight_1.geometry} material={materials.Stone_Light} />
        <mesh geometry={nodes.Path_Straight_2.geometry} material={materials.Stone_Dark} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/medieval_village_pack/Path_Straight.glb')
