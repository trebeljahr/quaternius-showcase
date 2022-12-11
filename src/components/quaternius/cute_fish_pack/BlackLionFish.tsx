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
    BlackLionFish_1: THREE.SkinnedMesh
    BlackLionFish_2: THREE.SkinnedMesh
    BlackLionFish_3: THREE.SkinnedMesh
    BlackLionFish_4: THREE.SkinnedMesh
    Main1: THREE.Bone
  }
  materials: {
    Eyes: THREE.MeshStandardMaterial
    BlackLionFish_Dark: THREE.MeshStandardMaterial
    BlackLionFish_Main: THREE.MeshStandardMaterial
    BlackLionFish_Light: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName =
  | 'Fish_Armature|Attack'
  | 'Fish_Armature|Death'
  | 'Fish_Armature|Out_Of_Water'
  | 'Fish_Armature|Swimming_Fast'
  | 'Fish_Armature|Swimming_Impulse'
  | 'Fish_Armature|Swimming_Normal'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/cute_fish_pack/BlackLionFish.glb') as unknown as GLTFResult
  const { actions } = useAnimationsWithCleanup(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <GenericAnimationController actions={actions} />
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='Fish_Armature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Main1} />
          </group>
          <group name='BlackLionFish' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='BlackLionFish_1'
              geometry={nodes.BlackLionFish_1.geometry}
              material={materials.Eyes}
              skeleton={nodes.BlackLionFish_1.skeleton}
            />
            <skinnedMesh
              name='BlackLionFish_2'
              geometry={nodes.BlackLionFish_2.geometry}
              material={materials.BlackLionFish_Dark}
              skeleton={nodes.BlackLionFish_2.skeleton}
            />
            <skinnedMesh
              name='BlackLionFish_3'
              geometry={nodes.BlackLionFish_3.geometry}
              material={materials.BlackLionFish_Main}
              skeleton={nodes.BlackLionFish_3.skeleton}
            />
            <skinnedMesh
              name='BlackLionFish_4'
              geometry={nodes.BlackLionFish_4.geometry}
              material={materials.BlackLionFish_Light}
              skeleton={nodes.BlackLionFish_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cute_fish_pack/BlackLionFish.glb')
