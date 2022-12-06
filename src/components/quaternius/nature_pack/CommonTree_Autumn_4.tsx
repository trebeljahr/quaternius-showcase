/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    CommonTree_Autumn_4_1: THREE.Mesh
    CommonTree_Autumn_4_2: THREE.Mesh
    CommonTree_Autumn_4_3: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Orange: THREE.MeshStandardMaterial
    LightOrange: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/nature_pack/CommonTree_Autumn_4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.CommonTree_Autumn_4_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.CommonTree_Autumn_4_2.geometry} material={materials.Orange} />
        <mesh geometry={nodes.CommonTree_Autumn_4_3.geometry} material={materials.LightOrange} />
      </group>
    </group>
  )
}
