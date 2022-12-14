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
    Fox_1: THREE.SkinnedMesh
    Fox_2: THREE.SkinnedMesh
    Fox_3: THREE.SkinnedMesh
    Fox_4: THREE.SkinnedMesh
    Fox_5: THREE.SkinnedMesh
    Body: THREE.Bone
    IKBackLegL: THREE.Bone
    IKFrontLegL: THREE.Bone
    IKBackLegR: THREE.Bone
    IKFrontLegR: THREE.Bone
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Main_Light: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Eyes: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName =
  | 'AnimalArmature|Attack'
  | 'AnimalArmature|Death'
  | 'AnimalArmature|Eating'
  | 'AnimalArmature|Gallop'
  | 'AnimalArmature|Gallop_Jump'
  | 'AnimalArmature|Idle'
  | 'AnimalArmature|Idle_2'
  | 'AnimalArmature|Idle_2_HeadLow'
  | 'AnimalArmature|Idle_HitReact_Left'
  | 'AnimalArmature|Idle_HitReact_Right'
  | 'AnimalArmature|Jump_ToIdle'
  | 'AnimalArmature|Walk'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/animals_pack/Fox.glb') as unknown as GLTFResult
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
          <group name='Fox' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Fox_1'
              geometry={nodes.Fox_1.geometry}
              material={materials.Main}
              skeleton={nodes.Fox_1.skeleton}
            />
            <skinnedMesh
              name='Fox_2'
              geometry={nodes.Fox_2.geometry}
              material={materials.Main_Light}
              skeleton={nodes.Fox_2.skeleton}
            />
            <skinnedMesh
              name='Fox_3'
              geometry={nodes.Fox_3.geometry}
              material={materials.Grey}
              skeleton={nodes.Fox_3.skeleton}
            />
            <skinnedMesh
              name='Fox_4'
              geometry={nodes.Fox_4.geometry}
              material={materials.Black}
              skeleton={nodes.Fox_4.skeleton}
            />
            <skinnedMesh
              name='Fox_5'
              geometry={nodes.Fox_5.geometry}
              material={materials.Eyes}
              skeleton={nodes.Fox_5.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/animals_pack/Fox.glb')
