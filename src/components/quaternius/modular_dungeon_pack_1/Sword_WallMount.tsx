/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Sword_WallMount: THREE.Mesh
    Sword_1: THREE.Mesh
    Sword_2: THREE.Mesh
    Sword_3: THREE.Mesh
    Sword_4: THREE.Mesh
    Sword_5: THREE.Mesh
    Sword_big_1: THREE.Mesh
    Sword_big_2: THREE.Mesh
    Sword_big_3: THREE.Mesh
    Sword_big_4: THREE.Mesh
    Sword_big_5: THREE.Mesh
  }
  materials: {
    DarkWood: THREE.MeshStandardMaterial
    DarkSteel: THREE.MeshStandardMaterial
    ['DarkWood.001']: THREE.MeshStandardMaterial
    LightWood: THREE.MeshStandardMaterial
    LightSteel: THREE.MeshStandardMaterial
    Steel: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_dungeon_1/Sword_WallMount.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Sword_WallMount.geometry}
        material={materials.DarkWood}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <group position={[0.01, 0.28, 0.11]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Sword_1.geometry} material={materials.DarkSteel} />
        <mesh geometry={nodes.Sword_2.geometry} material={materials['DarkWood.001']} />
        <mesh geometry={nodes.Sword_3.geometry} material={materials.LightWood} />
        <mesh geometry={nodes.Sword_4.geometry} material={materials.LightSteel} />
        <mesh geometry={nodes.Sword_5.geometry} material={materials.Steel} />
      </group>
      <group position={[0.08, 0.08, 0.14]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Sword_big_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Sword_big_2.geometry} material={materials.DarkSteel} />
        <mesh geometry={nodes.Sword_big_3.geometry} material={materials.LightWood} />
        <mesh geometry={nodes.Sword_big_4.geometry} material={materials.LightSteel} />
        <mesh geometry={nodes.Sword_big_5.geometry} material={materials.Steel} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_dungeon_1/Sword_WallMount.glb')
