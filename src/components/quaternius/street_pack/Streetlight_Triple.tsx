/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Streetlight_Triple_1: THREE.Mesh
    Streetlight_Triple_2: THREE.Mesh
    Streetlight_Triple_3: THREE.Mesh
  }
  materials: {
    ['Green.001']: THREE.MeshStandardMaterial
    ['Glass.001']: THREE.MeshStandardMaterial
    ['Light.001']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/street_pack/Streetlight_Triple.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Streetlight_Triple_1.geometry} material={materials['Green.001']} />
        <mesh geometry={nodes.Streetlight_Triple_2.geometry} material={materials['Glass.001']} />
        <mesh geometry={nodes.Streetlight_Triple_3.geometry} material={materials['Light.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/street_pack/Streetlight_Triple.glb')
