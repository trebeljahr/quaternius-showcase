/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Scythe_1: THREE.Mesh
    Scythe_2: THREE.Mesh
    Scythe_3: THREE.Mesh
    Scythe_4: THREE.Mesh
  }
  materials: {
    DarkWood: THREE.MeshStandardMaterial
    LightWood: THREE.MeshStandardMaterial
    Steel: THREE.MeshStandardMaterial
    LightSteel: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/medieval_weapons_pack/Scythe.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Scythe_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Scythe_2.geometry} material={materials.LightWood} />
        <mesh geometry={nodes.Scythe_3.geometry} material={materials.Steel} />
        <mesh geometry={nodes.Scythe_4.geometry} material={materials.LightSteel} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/medieval_weapons_pack/Scythe.glb')
