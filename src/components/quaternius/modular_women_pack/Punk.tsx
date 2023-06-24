/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Punk_Body_1: THREE.SkinnedMesh
    Punk_Body_2: THREE.SkinnedMesh
    Punk_Body_3: THREE.SkinnedMesh
    Punk_Feet_1: THREE.SkinnedMesh
    Punk_Feet_2: THREE.SkinnedMesh
    Punk_Head_1: THREE.SkinnedMesh
    Punk_Head_2: THREE.SkinnedMesh
    Punk_Head_3: THREE.SkinnedMesh
    Punk_Head_4: THREE.SkinnedMesh
    Punk_Head_5: THREE.SkinnedMesh
    Punk_Legs_1: THREE.SkinnedMesh
    Punk_Legs_2: THREE.SkinnedMesh
    Punk_Legs_3: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Skin: THREE.MeshStandardMaterial
    Pink: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
    Hair_Brown: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_women/Punk.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <primitive object={nodes.Root} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <skinnedMesh
          geometry={nodes.Punk_Body_1.geometry}
          material={materials.Skin}
          skeleton={nodes.Punk_Body_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Punk_Body_2.geometry}
          material={materials.Pink}
          skeleton={nodes.Punk_Body_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Punk_Body_3.geometry}
          material={materials.Black}
          skeleton={nodes.Punk_Body_3.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <skinnedMesh
          geometry={nodes.Punk_Feet_1.geometry}
          material={materials.Black}
          skeleton={nodes.Punk_Feet_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Punk_Feet_2.geometry}
          material={materials.Grey}
          skeleton={nodes.Punk_Feet_2.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <skinnedMesh
          geometry={nodes.Punk_Head_1.geometry}
          material={materials.Skin}
          skeleton={nodes.Punk_Head_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Punk_Head_2.geometry}
          material={materials.Pink}
          skeleton={nodes.Punk_Head_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Punk_Head_3.geometry}
          material={materials.Black}
          skeleton={nodes.Punk_Head_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Punk_Head_4.geometry}
          material={materials.Hair_Brown}
          skeleton={nodes.Punk_Head_4.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Punk_Head_5.geometry}
          material={materials.Brown}
          skeleton={nodes.Punk_Head_5.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <skinnedMesh
          geometry={nodes.Punk_Legs_1.geometry}
          material={materials.Skin}
          skeleton={nodes.Punk_Legs_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Punk_Legs_2.geometry}
          material={materials.Pink}
          skeleton={nodes.Punk_Legs_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Punk_Legs_3.geometry}
          material={materials.Black}
          skeleton={nodes.Punk_Legs_3.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_women/Punk.glb')
