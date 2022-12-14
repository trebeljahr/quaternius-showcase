/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Casual2_Body_1: THREE.SkinnedMesh
    Casual2_Body_2: THREE.SkinnedMesh
    Casual2_Feet_1: THREE.SkinnedMesh
    Casual2_Feet_2: THREE.SkinnedMesh
    Casual2_Head_1: THREE.SkinnedMesh
    Casual2_Head_2: THREE.SkinnedMesh
    Casual2_Head_3: THREE.SkinnedMesh
    Casual2_Head_4: THREE.SkinnedMesh
    Casual2_Head_5: THREE.SkinnedMesh
    Casual2_Legs: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    LightBrown: THREE.MeshStandardMaterial
    Skin: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Red_Dark: THREE.MeshStandardMaterial
    Skin_Darker: THREE.MeshStandardMaterial
    Eyebrows: THREE.MeshStandardMaterial
    Eye: THREE.MeshStandardMaterial
    Hair: THREE.MeshStandardMaterial
    LightBlue: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_men/Casual2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <primitive object={nodes.Root} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.Casual2_Body_1.geometry}
          material={materials.LightBrown}
          skeleton={nodes.Casual2_Body_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Casual2_Body_2.geometry}
          material={materials.Skin}
          skeleton={nodes.Casual2_Body_2.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.Casual2_Feet_1.geometry}
          material={materials.White}
          skeleton={nodes.Casual2_Feet_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Casual2_Feet_2.geometry}
          material={materials.Red_Dark}
          skeleton={nodes.Casual2_Feet_2.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.Casual2_Head_1.geometry}
          material={materials.Skin}
          skeleton={nodes.Casual2_Head_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Casual2_Head_2.geometry}
          material={materials.Skin_Darker}
          skeleton={nodes.Casual2_Head_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Casual2_Head_3.geometry}
          material={materials.Eyebrows}
          skeleton={nodes.Casual2_Head_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Casual2_Head_4.geometry}
          material={materials.Eye}
          skeleton={nodes.Casual2_Head_4.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Casual2_Head_5.geometry}
          material={materials.Hair}
          skeleton={nodes.Casual2_Head_5.skeleton}
        />
      </group>
      <skinnedMesh
        geometry={nodes.Casual2_Legs.geometry}
        material={materials.LightBlue}
        skeleton={nodes.Casual2_Legs.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/glb/modular_men/Casual2.glb')
