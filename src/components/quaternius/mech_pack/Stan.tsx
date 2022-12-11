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
    Stan: THREE.SkinnedMesh
    Body: THREE.Bone
    FootL: THREE.Bone
    FootR: THREE.Bone
  }
  materials: {
    Stan_Texture: THREE.MeshBasicMaterial
  }
  animations: GLTFAction[]
}

type ActionName =
  | 'Dance'
  | 'Death'
  | 'Hello'
  | 'HitRecieve_1'
  | 'HitRecieve_2'
  | 'Idle'
  | 'Jump'
  | 'Kick'
  | 'No'
  | 'Pickup'
  | 'Punch'
  | 'Run'
  | 'Run_Holding'
  | 'Shoot'
  | 'SwordSlash'
  | 'Walk'
  | 'Walk_Holding'
  | 'Yes'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/mech_pack/Stan.glb') as unknown as GLTFResult
  const { actions } = useAnimationsWithCleanup(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <GenericAnimationController actions={actions} />
      <group name='Scene'>
        <group name='RobotArmature'>
          <primitive object={nodes.Body} />
          <primitive object={nodes.FootL} />
          <primitive object={nodes.FootR} />
          <skinnedMesh
            name='Stan'
            geometry={nodes.Stan.geometry}
            material={materials.Stan_Texture}
            skeleton={nodes.Stan.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/mech_pack/Stan.glb')
