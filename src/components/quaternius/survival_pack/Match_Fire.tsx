/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Match_Fire_1: THREE.Mesh
    Match_Fire_2: THREE.Mesh
  }
  materials: {
    Match: THREE.MeshStandardMaterial
    Fire: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/survival_pack/Match_Fire.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Match_Fire_1.geometry} material={materials.Match} />
        <mesh geometry={nodes.Match_Fire_2.geometry} material={materials.Fire} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/survival_pack/Match_Fire.glb')
