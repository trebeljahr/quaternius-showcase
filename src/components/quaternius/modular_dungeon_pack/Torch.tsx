/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Torch_1: THREE.Mesh
    Torch_2: THREE.Mesh
    Torch_3: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    DarkSteel: THREE.MeshStandardMaterial
    Fire: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Torch.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Torch_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Torch_2.geometry} material={materials.DarkSteel} />
        <mesh geometry={nodes.Torch_3.geometry} material={materials.Fire} />
      </group>
    </group>
  )
}

useGLTF.preload('/Torch.glb')