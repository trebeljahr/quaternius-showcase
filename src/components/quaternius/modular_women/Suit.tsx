/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Suit_Body_1: THREE.SkinnedMesh
    Suit_Body_2: THREE.SkinnedMesh
    Suit_Body_3: THREE.SkinnedMesh
    Suit_Feet_1: THREE.SkinnedMesh
    Suit_Feet_2: THREE.SkinnedMesh
    Suit_Head_1: THREE.SkinnedMesh
    Suit_Head_2: THREE.SkinnedMesh
    Suit_Head_3: THREE.SkinnedMesh
    Suit_Head_4: THREE.SkinnedMesh
    Suit_Legs: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Skin: THREE.MeshStandardMaterial
    Hair_Blond: THREE.MeshStandardMaterial
    Hair_Brown: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Suit.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <primitive object={nodes.Root} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.Suit_Body_1.geometry}
          material={materials.Black}
          skeleton={nodes.Suit_Body_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Suit_Body_2.geometry}
          material={materials.White}
          skeleton={nodes.Suit_Body_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Suit_Body_3.geometry}
          material={materials.Skin}
          skeleton={nodes.Suit_Body_3.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.Suit_Feet_1.geometry}
          material={materials.Black}
          skeleton={nodes.Suit_Feet_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Suit_Feet_2.geometry}
          material={materials.Skin}
          skeleton={nodes.Suit_Feet_2.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.Suit_Head_1.geometry}
          material={materials.Skin}
          skeleton={nodes.Suit_Head_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Suit_Head_2.geometry}
          material={materials.Hair_Blond}
          skeleton={nodes.Suit_Head_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Suit_Head_3.geometry}
          material={materials.Hair_Brown}
          skeleton={nodes.Suit_Head_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Suit_Head_4.geometry}
          material={materials.Brown}
          skeleton={nodes.Suit_Head_4.skeleton}
        />
      </group>
      <skinnedMesh
        geometry={nodes.Suit_Legs.geometry}
        material={materials.Black}
        skeleton={nodes.Suit_Legs.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/Suit.glb')
