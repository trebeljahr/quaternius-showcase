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
    Suit_Body_4: THREE.SkinnedMesh
    Suit_Feet: THREE.SkinnedMesh
    Suit_Head_1: THREE.SkinnedMesh
    Suit_Head_2: THREE.SkinnedMesh
    Suit_Head_3: THREE.SkinnedMesh
    Suit_Head_4: THREE.SkinnedMesh
    Suit_Legs: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    White: THREE.MeshStandardMaterial
    Tie: THREE.MeshStandardMaterial
    Skin: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Hair: THREE.MeshStandardMaterial
    Eyebrows: THREE.MeshStandardMaterial
    Eye: THREE.MeshStandardMaterial
    Suit: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_men/Suit.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <primitive object={nodes.Root} />
      </group>
      <group position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <skinnedMesh
          geometry={nodes.Suit_Body_1.geometry}
          material={materials.Suit}
          skeleton={nodes.Suit_Body_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Suit_Body_2.geometry}
          material={materials.White}
          skeleton={nodes.Suit_Body_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Suit_Body_3.geometry}
          material={materials.Tie}
          skeleton={nodes.Suit_Body_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Suit_Body_4.geometry}
          material={materials.Skin}
          skeleton={nodes.Suit_Body_4.skeleton}
        />
      </group>
      <skinnedMesh
        geometry={nodes.Suit_Feet.geometry}
        material={materials.Black}
        skeleton={nodes.Suit_Feet.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <skinnedMesh
          geometry={nodes.Suit_Head_1.geometry}
          material={materials.Skin}
          skeleton={nodes.Suit_Head_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Suit_Head_2.geometry}
          material={materials.Hair}
          skeleton={nodes.Suit_Head_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Suit_Head_3.geometry}
          material={materials.Eyebrows}
          skeleton={nodes.Suit_Head_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Suit_Head_4.geometry}
          material={materials.Eye}
          skeleton={nodes.Suit_Head_4.skeleton}
        />
      </group>
      <skinnedMesh
        geometry={nodes.Suit_Legs.geometry}
        material={materials.Suit}
        skeleton={nodes.Suit_Legs.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/glb/modular_men/Suit.glb')
