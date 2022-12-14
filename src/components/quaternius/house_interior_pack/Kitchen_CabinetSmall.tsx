/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Kitchen_CabinetSmall_1: THREE.Mesh
    Kitchen_CabinetSmall_2: THREE.Mesh
  }
  materials: {
    Kitchen: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/house_interior_pack/Kitchen_CabinetSmall.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Kitchen_CabinetSmall_1.geometry} material={materials.Kitchen} />
        <mesh geometry={nodes.Kitchen_CabinetSmall_2.geometry} material={materials.White} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/house_interior_pack/Kitchen_CabinetSmall.glb')
