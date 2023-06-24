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
    ParrotFish_1: THREE.SkinnedMesh
    ParrotFish_2: THREE.SkinnedMesh
    ParrotFish_3: THREE.SkinnedMesh
    ParrotFish_4: THREE.SkinnedMesh
    ParrotFish_5: THREE.SkinnedMesh
    Main1: THREE.Bone
  }
  materials: {
    ParrotFish_Fins: THREE.MeshStandardMaterial
    ParrotFish_Light: THREE.MeshStandardMaterial
    ParrotFish_Main: THREE.MeshStandardMaterial
    ParrotFish_Teeth: THREE.MeshStandardMaterial
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
  const { nodes, materials, animations } = useGLTF('/glb/cute_fish_pack/ParrotFish.glb') as unknown as GLTFResult
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
          <group name='ParrotFish' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='ParrotFish_1'
              geometry={nodes.ParrotFish_1.geometry}
              material={materials.ParrotFish_Fins}
              skeleton={nodes.ParrotFish_1.skeleton}
            />
            <skinnedMesh
              name='ParrotFish_2'
              geometry={nodes.ParrotFish_2.geometry}
              material={materials.ParrotFish_Light}
              skeleton={nodes.ParrotFish_2.skeleton}
            />
            <skinnedMesh
              name='ParrotFish_3'
              geometry={nodes.ParrotFish_3.geometry}
              material={materials.ParrotFish_Main}
              skeleton={nodes.ParrotFish_3.skeleton}
            />
            <skinnedMesh
              name='ParrotFish_4'
              geometry={nodes.ParrotFish_4.geometry}
              material={materials.ParrotFish_Teeth}
              skeleton={nodes.ParrotFish_4.skeleton}
            />
            <skinnedMesh
              name='ParrotFish_5'
              geometry={nodes.ParrotFish_5.geometry}
              material={materials.Eyes}
              skeleton={nodes.ParrotFish_5.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cute_fish_pack/ParrotFish.glb')
