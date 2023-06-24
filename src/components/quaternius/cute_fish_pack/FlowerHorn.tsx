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
    FlowerHorn_1: THREE.SkinnedMesh
    FlowerHorn_2: THREE.SkinnedMesh
    FlowerHorn_3: THREE.SkinnedMesh
    FlowerHorn_4: THREE.SkinnedMesh
    Main1: THREE.Bone
  }
  materials: {
    Eyes: THREE.MeshStandardMaterial
    FlowerHorn_Main: THREE.MeshStandardMaterial
    FlowerHorn_Fins: THREE.MeshStandardMaterial
    FlowerHorn_Dark: THREE.MeshStandardMaterial
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
  const { nodes, materials, animations } = useGLTF('/glb/cute_fish_pack/FlowerHorn.glb') as unknown as GLTFResult
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
          <group name='FlowerHorn' rotation={[-Math.PI / 2, 0, 0]}>
            <skinnedMesh
              name='FlowerHorn_1'
              geometry={nodes.FlowerHorn_1.geometry}
              material={materials.Eyes}
              skeleton={nodes.FlowerHorn_1.skeleton}
            />
            <skinnedMesh
              name='FlowerHorn_2'
              geometry={nodes.FlowerHorn_2.geometry}
              material={materials.FlowerHorn_Main}
              skeleton={nodes.FlowerHorn_2.skeleton}
            />
            <skinnedMesh
              name='FlowerHorn_3'
              geometry={nodes.FlowerHorn_3.geometry}
              material={materials.FlowerHorn_Fins}
              skeleton={nodes.FlowerHorn_3.skeleton}
            />
            <skinnedMesh
              name='FlowerHorn_4'
              geometry={nodes.FlowerHorn_4.geometry}
              material={materials.FlowerHorn_Dark}
              skeleton={nodes.FlowerHorn_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cute_fish_pack/FlowerHorn.glb')
