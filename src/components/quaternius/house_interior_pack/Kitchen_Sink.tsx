/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Kitchen_Sink_1: THREE.Mesh
    Kitchen_Sink_2: THREE.Mesh
    Kitchen_Sink_3: THREE.Mesh
    Kitchen_Sink_4: THREE.Mesh
  }
  materials: {
    Kitchen: THREE.MeshStandardMaterial
    KitchenTop: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    LightMetal: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/house_interior_pack/Kitchen_Sink.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Kitchen_Sink_1.geometry} material={materials.Kitchen} />
        <mesh geometry={nodes.Kitchen_Sink_2.geometry} material={materials.KitchenTop} />
        <mesh geometry={nodes.Kitchen_Sink_3.geometry} material={materials.White} />
        <mesh geometry={nodes.Kitchen_Sink_4.geometry} material={materials.LightMetal} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/house_interior_pack/Kitchen_Sink.glb')
