/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    King_Body_1: THREE.SkinnedMesh
    King_Body_2: THREE.SkinnedMesh
    King_Body_3: THREE.SkinnedMesh
    King_Body_4: THREE.SkinnedMesh
    King_Body_5: THREE.SkinnedMesh
    King_Feet: THREE.SkinnedMesh
    King_Head_1: THREE.SkinnedMesh
    King_Head_2: THREE.SkinnedMesh
    King_Head_3: THREE.SkinnedMesh
    King_Head_4: THREE.SkinnedMesh
    King_Legs_1: THREE.SkinnedMesh
    King_Legs_2: THREE.SkinnedMesh
    King_Legs_3: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Blue: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    Beige: THREE.MeshStandardMaterial
    Metal_Dark: THREE.MeshStandardMaterial
    Skin: THREE.MeshStandardMaterial
    Hair_White: THREE.MeshStandardMaterial
    Eye: THREE.MeshStandardMaterial
    Gold: THREE.MeshStandardMaterial
    DarkBrown: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_men/King.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <primitive object={nodes.Root} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.King_Body_1.geometry}
          material={materials.Blue}
          skeleton={nodes.King_Body_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.King_Body_2.geometry}
          material={materials.Metal}
          skeleton={nodes.King_Body_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.King_Body_3.geometry}
          material={materials.Beige}
          skeleton={nodes.King_Body_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.King_Body_4.geometry}
          material={materials.Metal_Dark}
          skeleton={nodes.King_Body_4.skeleton}
        />
        <skinnedMesh
          geometry={nodes.King_Body_5.geometry}
          material={materials.Skin}
          skeleton={nodes.King_Body_5.skeleton}
        />
      </group>
      <skinnedMesh
        geometry={nodes.King_Feet.geometry}
        material={materials.Metal}
        skeleton={nodes.King_Feet.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.King_Head_1.geometry}
          material={materials.Skin}
          skeleton={nodes.King_Head_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.King_Head_2.geometry}
          material={materials.Hair_White}
          skeleton={nodes.King_Head_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.King_Head_3.geometry}
          material={materials.Eye}
          skeleton={nodes.King_Head_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.King_Head_4.geometry}
          material={materials.Gold}
          skeleton={nodes.King_Head_4.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.King_Legs_1.geometry}
          material={materials.Metal}
          skeleton={nodes.King_Legs_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.King_Legs_2.geometry}
          material={materials.Metal_Dark}
          skeleton={nodes.King_Legs_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.King_Legs_3.geometry}
          material={materials.DarkBrown}
          skeleton={nodes.King_Legs_3.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_men/King.glb')
