/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Casual_Body_1: THREE.SkinnedMesh
    Casual_Body_2: THREE.SkinnedMesh
    Casual_Feet_1: THREE.SkinnedMesh
    Casual_Feet_2: THREE.SkinnedMesh
    Casual_Head_1: THREE.SkinnedMesh
    Casual_Head_2: THREE.SkinnedMesh
    Casual_Head_3: THREE.SkinnedMesh
    Casual_Head_4: THREE.SkinnedMesh
    Casual_Legs_1: THREE.SkinnedMesh
    Casual_Legs_2: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Purple: THREE.MeshStandardMaterial
    Skin: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Eyebrows: THREE.MeshStandardMaterial
    Eye: THREE.MeshStandardMaterial
    Hair: THREE.MeshStandardMaterial
    LightBlue: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_men/Casual.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <primitive object={nodes.Root} />
      </group>
      <group position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <skinnedMesh
          geometry={nodes.Casual_Body_1.geometry}
          material={materials.Purple}
          skeleton={nodes.Casual_Body_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Casual_Body_2.geometry}
          material={materials.Skin}
          skeleton={nodes.Casual_Body_2.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <skinnedMesh
          geometry={nodes.Casual_Feet_1.geometry}
          material={materials.Purple}
          skeleton={nodes.Casual_Feet_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Casual_Feet_2.geometry}
          material={materials.White}
          skeleton={nodes.Casual_Feet_2.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <skinnedMesh
          geometry={nodes.Casual_Head_1.geometry}
          material={materials.Skin}
          skeleton={nodes.Casual_Head_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Casual_Head_2.geometry}
          material={materials.Eyebrows}
          skeleton={nodes.Casual_Head_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Casual_Head_3.geometry}
          material={materials.Eye}
          skeleton={nodes.Casual_Head_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Casual_Head_4.geometry}
          material={materials.Hair}
          skeleton={nodes.Casual_Head_4.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <skinnedMesh
          geometry={nodes.Casual_Legs_1.geometry}
          material={materials.Skin}
          skeleton={nodes.Casual_Legs_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Casual_Legs_2.geometry}
          material={materials.LightBlue}
          skeleton={nodes.Casual_Legs_2.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_men/Casual.glb')
