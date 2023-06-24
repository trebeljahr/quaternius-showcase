/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Worker_Body_1: THREE.SkinnedMesh
    Worker_Body_2: THREE.SkinnedMesh
    Worker_Body_3: THREE.SkinnedMesh
    Worker_Body_4: THREE.SkinnedMesh
    Worker_Feet_1: THREE.SkinnedMesh
    Worker_Feet_2: THREE.SkinnedMesh
    Worker_Head_1: THREE.SkinnedMesh
    Worker_Head_2: THREE.SkinnedMesh
    Worker_Head_3: THREE.SkinnedMesh
    Worker_Head_4: THREE.SkinnedMesh
    Worker_Legs_1: THREE.SkinnedMesh
    Worker_Legs_2: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Skin: THREE.MeshStandardMaterial
    Worker_Vest: THREE.MeshStandardMaterial
    Worker_Yellow: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    DarkBrown: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
    Brown_02: THREE.MeshStandardMaterial
    Brown2: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_women/Worker.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <primitive object={nodes.Root} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <skinnedMesh
          geometry={nodes.Worker_Body_1.geometry}
          material={materials.Skin}
          skeleton={nodes.Worker_Body_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Worker_Body_2.geometry}
          material={materials.Worker_Vest}
          skeleton={nodes.Worker_Body_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Worker_Body_3.geometry}
          material={materials.Worker_Yellow}
          skeleton={nodes.Worker_Body_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Worker_Body_4.geometry}
          material={materials.White}
          skeleton={nodes.Worker_Body_4.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <skinnedMesh
          geometry={nodes.Worker_Feet_1.geometry}
          material={materials.Skin}
          skeleton={nodes.Worker_Feet_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Worker_Feet_2.geometry}
          material={materials.Black}
          skeleton={nodes.Worker_Feet_2.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <skinnedMesh
          geometry={nodes.Worker_Head_1.geometry}
          material={materials.Skin}
          skeleton={nodes.Worker_Head_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Worker_Head_2.geometry}
          material={materials.Worker_Yellow}
          skeleton={nodes.Worker_Head_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Worker_Head_3.geometry}
          material={materials.DarkBrown}
          skeleton={nodes.Worker_Head_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Worker_Head_4.geometry}
          material={materials.Brown}
          skeleton={nodes.Worker_Head_4.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <skinnedMesh
          geometry={nodes.Worker_Legs_1.geometry}
          material={materials.Brown_02}
          skeleton={nodes.Worker_Legs_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Worker_Legs_2.geometry}
          material={materials.Brown2}
          skeleton={nodes.Worker_Legs_2.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_women/Worker.glb')
