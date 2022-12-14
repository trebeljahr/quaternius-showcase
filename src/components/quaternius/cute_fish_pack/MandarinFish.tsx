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
    MandarinFish_1: THREE.SkinnedMesh
    MandarinFish_2: THREE.SkinnedMesh
    MandarinFish_3: THREE.SkinnedMesh
    MandarinFish_4: THREE.SkinnedMesh
    Main1: THREE.Bone
  }
  materials: {
    MandarinFish_Main: THREE.MeshStandardMaterial
    MandarinFish_Light: THREE.MeshStandardMaterial
    MandarinFish_Dark: THREE.MeshStandardMaterial
    Eyes: THREE.MeshStandardMaterial
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
  const { nodes, materials, animations } = useGLTF('/glb/cute_fish_pack/MandarinFish.glb') as unknown as GLTFResult
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
          <group name='MandarinFish' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='MandarinFish_1'
              geometry={nodes.MandarinFish_1.geometry}
              material={materials.MandarinFish_Main}
              skeleton={nodes.MandarinFish_1.skeleton}
            />
            <skinnedMesh
              name='MandarinFish_2'
              geometry={nodes.MandarinFish_2.geometry}
              material={materials.MandarinFish_Light}
              skeleton={nodes.MandarinFish_2.skeleton}
            />
            <skinnedMesh
              name='MandarinFish_3'
              geometry={nodes.MandarinFish_3.geometry}
              material={materials.MandarinFish_Dark}
              skeleton={nodes.MandarinFish_3.skeleton}
            />
            <skinnedMesh
              name='MandarinFish_4'
              geometry={nodes.MandarinFish_4.geometry}
              material={materials.Eyes}
              skeleton={nodes.MandarinFish_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cute_fish_pack/MandarinFish.glb')
