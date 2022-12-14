/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Apple_Crop_1: THREE.Mesh
    Apple_Crop_2: THREE.Mesh
    Apple_Crop_3: THREE.Mesh
  }
  materials: {
    ['DarkRed.003']: THREE.MeshStandardMaterial
    DarkBrown: THREE.MeshStandardMaterial
    ['DarkGreen.002']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/crops_pack/Apple_Crop.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Apple_Crop_1.geometry} material={materials['DarkRed.003']} />
        <mesh geometry={nodes.Apple_Crop_2.geometry} material={materials.DarkBrown} />
        <mesh geometry={nodes.Apple_Crop_3.geometry} material={materials['DarkGreen.002']} />
      </group>
    </group>
  )
}
