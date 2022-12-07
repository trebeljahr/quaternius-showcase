/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Triangle_1: THREE.Mesh
    Triangle_2: THREE.Mesh
    Triangle_3: THREE.Mesh
  }
  materials: {
    Yellow: THREE.MeshStandardMaterial
    ['White.001']: THREE.MeshStandardMaterial
    ['Pole.001']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/street_pack/Sign_Triangle.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Triangle_1.geometry} material={materials.Yellow} />
        <mesh geometry={nodes.Triangle_2.geometry} material={materials['White.001']} />
        <mesh geometry={nodes.Triangle_3.geometry} material={materials['Pole.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/street_pack/Sign_Triangle.glb')
