/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Donkey_1: THREE.SkinnedMesh
    Donkey_2: THREE.SkinnedMesh
    Donkey_3: THREE.SkinnedMesh
    Donkey_4: THREE.SkinnedMesh
    Donkey_5: THREE.SkinnedMesh
    Donkey_6: THREE.SkinnedMesh
    Donkey_7: THREE.SkinnedMesh
    Donkey_8: THREE.SkinnedMesh
    Body: THREE.Bone
    IKBackLegL: THREE.Bone
    IKFrontLegL: THREE.Bone
    IKBackLegR: THREE.Bone
    IKFrontLegR: THREE.Bone
  }
  materials: {
    Main_Light: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Hair: THREE.MeshStandardMaterial
    Muzzle: THREE.MeshStandardMaterial
    Hooves: THREE.MeshStandardMaterial
    Main_Dark: THREE.MeshStandardMaterial
    Eye_Dark: THREE.MeshStandardMaterial
    Eye_White: THREE.MeshStandardMaterial
  }
}

type ActionName =
  | 'AnimalArmature|Attack_Headbutt'
  | 'AnimalArmature|Attack_Kick'
  | 'AnimalArmature|Death'
  | 'AnimalArmature|Eating'
  | 'AnimalArmature|Gallop'
  | 'AnimalArmature|Gallop_Jump'
  | 'AnimalArmature|Idle'
  | 'AnimalArmature|Idle_2'
  | 'AnimalArmature|Idle_Headlow'
  | 'AnimalArmature|Idle_HitReact_Left'
  | 'AnimalArmature|Idle_HitReact_Right'
  | 'AnimalArmature|Jump_toIdle'
  | 'AnimalArmature|Walk'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/Donkey.glb') as unknown as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='AnimalArmature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Body} />
            <primitive object={nodes.IKBackLegL} />
            <primitive object={nodes.IKFrontLegL} />
            <primitive object={nodes.IKBackLegR} />
            <primitive object={nodes.IKFrontLegR} />
          </group>
          <group name='Donkey' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Donkey_1'
              geometry={nodes.Donkey_1.geometry}
              material={materials.Main_Light}
              skeleton={nodes.Donkey_1.skeleton}
            />
            <skinnedMesh
              name='Donkey_2'
              geometry={nodes.Donkey_2.geometry}
              material={materials.Main}
              skeleton={nodes.Donkey_2.skeleton}
            />
            <skinnedMesh
              name='Donkey_3'
              geometry={nodes.Donkey_3.geometry}
              material={materials.Hair}
              skeleton={nodes.Donkey_3.skeleton}
            />
            <skinnedMesh
              name='Donkey_4'
              geometry={nodes.Donkey_4.geometry}
              material={materials.Muzzle}
              skeleton={nodes.Donkey_4.skeleton}
            />
            <skinnedMesh
              name='Donkey_5'
              geometry={nodes.Donkey_5.geometry}
              material={materials.Hooves}
              skeleton={nodes.Donkey_5.skeleton}
            />
            <skinnedMesh
              name='Donkey_6'
              geometry={nodes.Donkey_6.geometry}
              material={materials.Main_Dark}
              skeleton={nodes.Donkey_6.skeleton}
            />
            <skinnedMesh
              name='Donkey_7'
              geometry={nodes.Donkey_7.geometry}
              material={materials.Eye_Dark}
              skeleton={nodes.Donkey_7.skeleton}
            />
            <skinnedMesh
              name='Donkey_8'
              geometry={nodes.Donkey_8.geometry}
              material={materials.Eye_White}
              skeleton={nodes.Donkey_8.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Donkey.glb')
