/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Gem6: THREE.Mesh
    Gem5: THREE.Mesh
    Gem4: THREE.Mesh
    Gem3: THREE.Mesh
    Gem7: THREE.Mesh
    Gem2: THREE.Mesh
    Gem1: THREE.Mesh
  }
  materials: {
    ['Material.006']: THREE.MeshStandardMaterial
    ['Material.007']: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
    ['Material.012']: THREE.MeshStandardMaterial
    ['Material.011']: THREE.MeshStandardMaterial
    ['Material.010']: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Gems.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Gem6.geometry}
        material={materials['Material.006']}
        position={[-0.65, -0.13, 2.2]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Gem5.geometry}
        material={materials['Material.007']}
        position={[-0.65, -0.13, 1.35]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Gem4.geometry}
        material={materials['Material.008']}
        position={[-0.71, -0.12, 0.64]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Gem3.geometry}
        material={materials['Material.009']}
        position={[-0.64, 0.1, 0.09]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Gem7.geometry}
        material={materials['Material.012']}
        position={[-0.69, -0.11, -2.41]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Gem2.geometry}
        material={materials['Material.011']}
        position={[-0.59, -0.03, -1.51]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Gem1.geometry}
        material={materials['Material.010']}
        position={[-0.41, -0.08, -0.75]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/Gems.glb')
