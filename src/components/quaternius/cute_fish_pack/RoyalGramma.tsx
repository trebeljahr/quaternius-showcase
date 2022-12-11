/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GenericAnimationController } from '@/components/canvas/GenericAnimationController'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    RoyalGramma_1: THREE.SkinnedMesh
    RoyalGramma_2: THREE.SkinnedMesh
    RoyalGramma_3: THREE.SkinnedMesh
    RoyalGramma_4: THREE.SkinnedMesh
    Main1: THREE.Bone
  }
  materials: {
    RoyalGramma_Light: THREE.MeshStandardMaterial
    RoyalGramma_Main: THREE.MeshStandardMaterial
    Eyes: THREE.MeshStandardMaterial
    RoyalGramma_Fins: THREE.MeshStandardMaterial
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
  const { nodes, materials, animations } = useGLTF('/glb/cute_fish_pack/RoyalGramma.glb') as unknown as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <GenericAnimationController actions={actions} />
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='Fish_Armature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Main1} />
          </group>
          <group name='RoyalGramma' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='RoyalGramma_1'
              geometry={nodes.RoyalGramma_1.geometry}
              material={materials.RoyalGramma_Light}
              skeleton={nodes.RoyalGramma_1.skeleton}
            />
            <skinnedMesh
              name='RoyalGramma_2'
              geometry={nodes.RoyalGramma_2.geometry}
              material={materials.RoyalGramma_Main}
              skeleton={nodes.RoyalGramma_2.skeleton}
            />
            <skinnedMesh
              name='RoyalGramma_3'
              geometry={nodes.RoyalGramma_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.RoyalGramma_3.skeleton}
            />
            <skinnedMesh
              name='RoyalGramma_4'
              geometry={nodes.RoyalGramma_4.geometry}
              material={materials.RoyalGramma_Fins}
              skeleton={nodes.RoyalGramma_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cute_fish_pack/RoyalGramma.glb')