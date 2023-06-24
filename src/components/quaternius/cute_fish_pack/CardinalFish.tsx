/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAnimationsWithCleanup } from '@/hooks/useAnimationsWithCleanup'
import { GenericAnimationController } from '@/components/canvas/GenericAnimationController'
import { GLTF } from 'three-stdlib'
import { DoubleSide } from 'three'

type GLTFResult = GLTF & {
  nodes: {
    CardinalFish_1: THREE.SkinnedMesh
    CardinalFish_2: THREE.SkinnedMesh
    CardinalFish_3: THREE.SkinnedMesh
    CardinalFish_4: THREE.SkinnedMesh
    Main1: THREE.Bone
  }
  materials: {
    CardinalFish_Fins: THREE.MeshStandardMaterial
    Eyes: THREE.MeshStandardMaterial
    CardinalFish_Main: THREE.MeshStandardMaterial
    CardinalFish_Light: THREE.MeshStandardMaterial
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
  const { nodes, materials, animations } = useGLTF('/glb/cute_fish_pack/CardinalFish.glb') as unknown as GLTFResult
  const { actions } = useAnimationsWithCleanup(animations, group)

  useLayoutEffect(() => {
    Object.keys(materials).forEach((key) => {
      Object.assign(materials[key], { side: DoubleSide })
    })
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <GenericAnimationController actions={actions} />
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='Fish_Armature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Main1} />
          </group>
          <group name='CardinalFish' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='CardinalFish_1'
              geometry={nodes.CardinalFish_1.geometry}
              material={materials.CardinalFish_Fins}
              skeleton={nodes.CardinalFish_1.skeleton}
            />
            <skinnedMesh
              name='CardinalFish_2'
              geometry={nodes.CardinalFish_2.geometry}
              material={materials.Eyes}
              skeleton={nodes.CardinalFish_2.skeleton}
            />
            <skinnedMesh
              name='CardinalFish_3'
              geometry={nodes.CardinalFish_3.geometry}
              material={materials.CardinalFish_Main}
              skeleton={nodes.CardinalFish_3.skeleton}
            />
            <skinnedMesh
              name='CardinalFish_4'
              geometry={nodes.CardinalFish_4.geometry}
              material={materials.CardinalFish_Light}
              skeleton={nodes.CardinalFish_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cute_fish_pack/CardinalFish.glb')
