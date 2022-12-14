/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAnimationsWithCleanup } from '@/hooks/useAnimationsWithCleanup'
import { GenericAnimationController } from '@/components/canvas/GenericAnimationController'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Deer_1: THREE.SkinnedMesh
    Deer_2: THREE.SkinnedMesh
    Deer_3: THREE.SkinnedMesh
    Deer_4: THREE.SkinnedMesh
    Deer_5: THREE.SkinnedMesh
    Deer_6: THREE.SkinnedMesh
    Deer_7: THREE.SkinnedMesh
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
    Hooves: THREE.MeshStandardMaterial
    Eye_Lighter: THREE.MeshStandardMaterial
    Eye_Black: THREE.MeshStandardMaterial
    Eye_White: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
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
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/animals_pack/Deer.glb') as unknown as GLTFResult
  const { actions } = useAnimationsWithCleanup(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <GenericAnimationController actions={actions} />
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='AnimalArmature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Body} />
            <primitive object={nodes.IKBackLegL} />
            <primitive object={nodes.IKFrontLegL} />
            <primitive object={nodes.IKBackLegR} />
            <primitive object={nodes.IKFrontLegR} />
          </group>
          <group name='Deer' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Deer_1'
              geometry={nodes.Deer_1.geometry}
              material={materials.Main_Light}
              skeleton={nodes.Deer_1.skeleton}
            />
            <skinnedMesh
              name='Deer_2'
              geometry={nodes.Deer_2.geometry}
              material={materials.Main}
              skeleton={nodes.Deer_2.skeleton}
            />
            <skinnedMesh
              name='Deer_3'
              geometry={nodes.Deer_3.geometry}
              material={materials.Main_Dark}
              skeleton={nodes.Deer_3.skeleton}
            />
            <skinnedMesh
              name='Deer_4'
              geometry={nodes.Deer_4.geometry}
              material={materials.Hooves}
              skeleton={nodes.Deer_4.skeleton}
            />
            <skinnedMesh
              name='Deer_5'
              geometry={nodes.Deer_5.geometry}
              material={materials.Eye_Lighter}
              skeleton={nodes.Deer_5.skeleton}
            />
            <skinnedMesh
              name='Deer_6'
              geometry={nodes.Deer_6.geometry}
              material={materials.Eye_Black}
              skeleton={nodes.Deer_6.skeleton}
            />
            <skinnedMesh
              name='Deer_7'
              geometry={nodes.Deer_7.geometry}
              material={materials.Eye_White}
              skeleton={nodes.Deer_7.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/animals_pack/Deer.glb')
