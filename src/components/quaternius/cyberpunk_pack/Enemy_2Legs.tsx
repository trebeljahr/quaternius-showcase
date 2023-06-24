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
    Enemy_Robot_2Legs_1: THREE.SkinnedMesh
    Enemy_Robot_2Legs_2: THREE.SkinnedMesh
    Enemy_Robot_2Legs_3: THREE.SkinnedMesh
    Enemy_Robot_2Legs_4: THREE.SkinnedMesh
    Enemy_Robot_2Legs_5: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Main2: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Edge: THREE.MeshStandardMaterial
    Dark: THREE.MeshStandardMaterial
    Eye: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName =
  | 'CharacterArmature|Attack'
  | 'CharacterArmature|Death'
  | 'CharacterArmature|Idle'
  | 'CharacterArmature|Jump'
  | 'CharacterArmature|Run'
  | 'CharacterArmature|Shoot'
  | 'CharacterArmature|Walk'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/cyberpunk_pack/Enemy_2Legs.glb') as unknown as GLTFResult
  const { actions } = useAnimationsWithCleanup(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <GenericAnimationController actions={actions} />
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='CharacterArmature' rotation={[-Math.PI / 2, 0, 0]}>
            <primitive object={nodes.Root} />
          </group>
          <group name='Enemy_Robot_2Legs' rotation={[-Math.PI / 2, 0, 0]}>
            <skinnedMesh
              name='Enemy_Robot_2Legs_1'
              geometry={nodes.Enemy_Robot_2Legs_1.geometry}
              material={materials.Main2}
              skeleton={nodes.Enemy_Robot_2Legs_1.skeleton}
            />
            <skinnedMesh
              name='Enemy_Robot_2Legs_2'
              geometry={nodes.Enemy_Robot_2Legs_2.geometry}
              material={materials.Main}
              skeleton={nodes.Enemy_Robot_2Legs_2.skeleton}
            />
            <skinnedMesh
              name='Enemy_Robot_2Legs_3'
              geometry={nodes.Enemy_Robot_2Legs_3.geometry}
              material={materials.Edge}
              skeleton={nodes.Enemy_Robot_2Legs_3.skeleton}
            />
            <skinnedMesh
              name='Enemy_Robot_2Legs_4'
              geometry={nodes.Enemy_Robot_2Legs_4.geometry}
              material={materials.Dark}
              skeleton={nodes.Enemy_Robot_2Legs_4.skeleton}
            />
            <skinnedMesh
              name='Enemy_Robot_2Legs_5'
              geometry={nodes.Enemy_Robot_2Legs_5.geometry}
              material={materials.Eye}
              skeleton={nodes.Enemy_Robot_2Legs_5.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cyberpunk_pack/Enemy_2Legs.glb')
