/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Alpaca_1: THREE.SkinnedMesh
    Alpaca_2: THREE.SkinnedMesh
    Alpaca_3: THREE.SkinnedMesh
    Alpaca_4: THREE.SkinnedMesh
    Alpaca_5: THREE.SkinnedMesh
    Alpaca_6: THREE.SkinnedMesh
    Alpaca_7: THREE.SkinnedMesh
    Body: THREE.Bone
    IKBackLegL: THREE.Bone
    IKFrontLegL: THREE.Bone
    IKBackLegR: THREE.Bone
    IKFrontLegR: THREE.Bone
  }
  materials: {
    Main_Light: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Main_Dark: THREE.MeshStandardMaterial
    Muzzle: THREE.MeshStandardMaterial
    Hooves: THREE.MeshStandardMaterial
    Eyes_Black: THREE.MeshStandardMaterial
    Eyes_White: THREE.MeshStandardMaterial
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
  const { nodes, materials, animations } = useGLTF('/Alpaca.glb') as unknown as GLTFResult
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
          <group name='Alpaca' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Alpaca_1'
              geometry={nodes.Alpaca_1.geometry}
              material={materials.Main_Light}
              skeleton={nodes.Alpaca_1.skeleton}
            />
            <skinnedMesh
              name='Alpaca_2'
              geometry={nodes.Alpaca_2.geometry}
              material={materials.Main}
              skeleton={nodes.Alpaca_2.skeleton}
            />
            <skinnedMesh
              name='Alpaca_3'
              geometry={nodes.Alpaca_3.geometry}
              material={materials.Main_Dark}
              skeleton={nodes.Alpaca_3.skeleton}
            />
            <skinnedMesh
              name='Alpaca_4'
              geometry={nodes.Alpaca_4.geometry}
              material={materials.Muzzle}
              skeleton={nodes.Alpaca_4.skeleton}
            />
            <skinnedMesh
              name='Alpaca_5'
              geometry={nodes.Alpaca_5.geometry}
              material={materials.Hooves}
              skeleton={nodes.Alpaca_5.skeleton}
            />
            <skinnedMesh
              name='Alpaca_6'
              geometry={nodes.Alpaca_6.geometry}
              material={materials.Eyes_Black}
              skeleton={nodes.Alpaca_6.skeleton}
            />
            <skinnedMesh
              name='Alpaca_7'
              geometry={nodes.Alpaca_7.geometry}
              material={materials.Eyes_White}
              skeleton={nodes.Alpaca_7.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Alpaca.glb')
