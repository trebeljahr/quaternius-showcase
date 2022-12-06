/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Medieval_Body_1: THREE.SkinnedMesh
    Medieval_Body_2: THREE.SkinnedMesh
    Medieval_Body_3: THREE.SkinnedMesh
    Medieval_Body_4: THREE.SkinnedMesh
    Medieval_Body_5: THREE.SkinnedMesh
    Medieval_Body_6: THREE.SkinnedMesh
    Medieval_Feet_1: THREE.SkinnedMesh
    Medieval_Feet_2: THREE.SkinnedMesh
    Medieval_Head_1: THREE.SkinnedMesh
    Medieval_Head_2: THREE.SkinnedMesh
    Medieval_Head_3: THREE.SkinnedMesh
    Medieval_Head_4: THREE.SkinnedMesh
    Medieval_Head_5: THREE.SkinnedMesh
    Medieval_Legs: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    LightBrown: THREE.MeshStandardMaterial
    DarkBrown: THREE.MeshStandardMaterial
    Skin: THREE.MeshStandardMaterial
    Gold: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Medieval.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <primitive object={nodes.Root} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.Medieval_Body_1.geometry}
          material={materials.Black}
          skeleton={nodes.Medieval_Body_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Medieval_Body_2.geometry}
          material={materials.LightBrown}
          skeleton={nodes.Medieval_Body_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Medieval_Body_3.geometry}
          material={materials.DarkBrown}
          skeleton={nodes.Medieval_Body_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Medieval_Body_4.geometry}
          material={materials.Skin}
          skeleton={nodes.Medieval_Body_4.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Medieval_Body_5.geometry}
          material={materials.Gold}
          skeleton={nodes.Medieval_Body_5.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Medieval_Body_6.geometry}
          material={materials.Metal}
          skeleton={nodes.Medieval_Body_6.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.Medieval_Feet_1.geometry}
          material={materials.LightBrown}
          skeleton={nodes.Medieval_Feet_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Medieval_Feet_2.geometry}
          material={materials.DarkBrown}
          skeleton={nodes.Medieval_Feet_2.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.Medieval_Head_1.geometry}
          material={materials.Black}
          skeleton={nodes.Medieval_Head_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Medieval_Head_2.geometry}
          material={materials.DarkBrown}
          skeleton={nodes.Medieval_Head_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Medieval_Head_3.geometry}
          material={materials.Skin}
          skeleton={nodes.Medieval_Head_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Medieval_Head_4.geometry}
          material={materials.Brown}
          skeleton={nodes.Medieval_Head_4.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Medieval_Head_5.geometry}
          material={materials.White}
          skeleton={nodes.Medieval_Head_5.skeleton}
        />
      </group>
      <skinnedMesh
        geometry={nodes.Medieval_Legs.geometry}
        material={materials.Black}
        skeleton={nodes.Medieval_Legs.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/Medieval.glb')
