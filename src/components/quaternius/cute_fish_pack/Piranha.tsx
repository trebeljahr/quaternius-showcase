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
    Piranha_1: THREE.SkinnedMesh
    Piranha_2: THREE.SkinnedMesh
    Piranha_3: THREE.SkinnedMesh
    Piranha_4: THREE.SkinnedMesh
    Piranha_5: THREE.SkinnedMesh
    Main1: THREE.Bone
  }
  materials: {
    Piranha_Main: THREE.MeshStandardMaterial
    Piranha_Light: THREE.MeshStandardMaterial
    Piranha_Fins: THREE.MeshStandardMaterial
    Eyes: THREE.MeshStandardMaterial
    Piranha_Teeth: THREE.MeshStandardMaterial
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
  const { nodes, materials, animations } = useGLTF('/glb/cute_fish_pack/Piranha.glb') as unknown as GLTFResult
  const { actions } = useAnimationsWithCleanup(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <GenericAnimationController actions={actions} />
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='Fish_Armature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Main1} />
          </group>
          <group name='Piranha' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Piranha_1'
              geometry={nodes.Piranha_1.geometry}
              material={materials.Piranha_Main}
              skeleton={nodes.Piranha_1.skeleton}
            />
            <skinnedMesh
              name='Piranha_2'
              geometry={nodes.Piranha_2.geometry}
              material={materials.Piranha_Light}
              skeleton={nodes.Piranha_2.skeleton}
            />
            <skinnedMesh
              name='Piranha_3'
              geometry={nodes.Piranha_3.geometry}
              material={materials.Piranha_Fins}
              skeleton={nodes.Piranha_3.skeleton}
            />
            <skinnedMesh
              name='Piranha_4'
              geometry={nodes.Piranha_4.geometry}
              material={materials.Eyes}
              skeleton={nodes.Piranha_4.skeleton}
            />
            <skinnedMesh
              name='Piranha_5'
              geometry={nodes.Piranha_5.geometry}
              material={materials.Piranha_Teeth}
              skeleton={nodes.Piranha_5.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cute_fish_pack/Piranha.glb')
