/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    AR_4_1: THREE.Mesh
    AR_4_2: THREE.Mesh
    AR_4_3: THREE.Mesh
    AR_4_4: THREE.Mesh
    Magazine: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_sci_fi_guns_pack/AR_4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.AR_4_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.AR_4_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.AR_4_3.geometry} material={materials.Main} />
        <mesh geometry={nodes.AR_4_4.geometry} material={materials.White} />
      </group>
      <mesh
        geometry={nodes.Magazine.geometry}
        material={materials.Black}
        position={[0.3, 0.05, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/glb/modular_sci_fi_guns_pack/AR_4.glb')
