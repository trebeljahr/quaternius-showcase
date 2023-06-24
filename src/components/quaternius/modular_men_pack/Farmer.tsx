/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Farmer_Body_1: THREE.SkinnedMesh
    Farmer_Body_2: THREE.SkinnedMesh
    Farmer_Body_3: THREE.SkinnedMesh
    Farmer_Body_4: THREE.SkinnedMesh
    Farmer_Feet_1: THREE.SkinnedMesh
    Farmer_Feet_2: THREE.SkinnedMesh
    Farmer_Head_1: THREE.SkinnedMesh
    Farmer_Head_2: THREE.SkinnedMesh
    Farmer_Head_3: THREE.SkinnedMesh
    Farmer_Head_4: THREE.SkinnedMesh
    Farmer_Head_5: THREE.SkinnedMesh
    Farmer_Pants: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    LightBlue: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
    Skin: THREE.MeshStandardMaterial
    Beige: THREE.MeshStandardMaterial
    Brown2: THREE.MeshStandardMaterial
    Eyebrows: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
    Eye: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_men/Farmer.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <primitive object={nodes.Root} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.Farmer_Body_1.geometry}
          material={materials.LightBlue}
          skeleton={nodes.Farmer_Body_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Farmer_Body_2.geometry}
          material={materials.Brown}
          skeleton={nodes.Farmer_Body_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Farmer_Body_3.geometry}
          material={materials.Skin}
          skeleton={nodes.Farmer_Body_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Farmer_Body_4.geometry}
          material={materials.Beige}
          skeleton={nodes.Farmer_Body_4.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.Farmer_Feet_1.geometry}
          material={materials.Brown}
          skeleton={nodes.Farmer_Feet_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Farmer_Feet_2.geometry}
          material={materials.Brown2}
          skeleton={nodes.Farmer_Feet_2.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.Farmer_Head_1.geometry}
          material={materials.Skin}
          skeleton={nodes.Farmer_Head_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Farmer_Head_2.geometry}
          material={materials.Beige}
          skeleton={nodes.Farmer_Head_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Farmer_Head_3.geometry}
          material={materials.Eyebrows}
          skeleton={nodes.Farmer_Head_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Farmer_Head_4.geometry}
          material={materials.Red}
          skeleton={nodes.Farmer_Head_4.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Farmer_Head_5.geometry}
          material={materials.Eye}
          skeleton={nodes.Farmer_Head_5.skeleton}
        />
      </group>
      <skinnedMesh
        geometry={nodes.Farmer_Pants.geometry}
        material={materials.LightBlue}
        skeleton={nodes.Farmer_Pants.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/glb/modular_men/Farmer.glb')