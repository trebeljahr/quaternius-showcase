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
    Humphead_1: THREE.SkinnedMesh
    Humphead_2: THREE.SkinnedMesh
    Humphead_3: THREE.SkinnedMesh
    Humphead_4: THREE.SkinnedMesh
    Main1: THREE.Bone
  }
  materials: {
    Eyes: THREE.MeshStandardMaterial
    Humphead_Dark: THREE.MeshStandardMaterial
    Humphead_Fins: THREE.MeshStandardMaterial
    Humphead_Main: THREE.MeshStandardMaterial
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
  const { nodes, materials, animations } = useGLTF('/glb/cute_fish_pack/Humphead.glb') as unknown as GLTFResult
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
          <group name='Fish_Armature' rotation={[-Math.PI / 2, 0, 0]}>
            <primitive object={nodes.Main1} />
          </group>
          <group name='Humphead' rotation={[-Math.PI / 2, 0, 0]}>
            <skinnedMesh
              name='Humphead_1'
              geometry={nodes.Humphead_1.geometry}
              material={materials.Eyes}
              skeleton={nodes.Humphead_1.skeleton}
            />
            <skinnedMesh
              name='Humphead_2'
              geometry={nodes.Humphead_2.geometry}
              material={materials.Humphead_Dark}
              skeleton={nodes.Humphead_2.skeleton}
            />
            <skinnedMesh
              name='Humphead_3'
              geometry={nodes.Humphead_3.geometry}
              material={materials.Humphead_Fins}
              skeleton={nodes.Humphead_3.skeleton}
            />
            <skinnedMesh
              name='Humphead_4'
              geometry={nodes.Humphead_4.geometry}
              material={materials.Humphead_Main}
              skeleton={nodes.Humphead_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cute_fish_pack/Humphead.glb')
