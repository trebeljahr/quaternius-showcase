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
    Cube001_1: THREE.SkinnedMesh
    Cube001_2: THREE.SkinnedMesh
    Cube025_1: THREE.SkinnedMesh
    Cube025_2: THREE.SkinnedMesh
    Cube025_3: THREE.SkinnedMesh
    Cube025_4: THREE.SkinnedMesh
    Main1: THREE.Bone
  }
  materials: {
    Goldfish_Fins: THREE.MeshStandardMaterial
    ['Material.016']: THREE.MeshStandardMaterial
    BlueGoldfish_Main: THREE.MeshStandardMaterial
    Goldfish_Light: THREE.MeshStandardMaterial
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
  const { nodes, materials, animations } = useGLTF('/glb/cute_fish_pack/BlueGoldfish.glb') as unknown as GLTFResult
  const { actions } = useAnimationsWithCleanup(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <GenericAnimationController actions={actions} />
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='Fish_Armature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Main1} />
          </group>
          <group name='Cube000' rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <group name='Cube001' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Cube001_1'
              geometry={nodes.Cube001_1.geometry}
              material={materials.Goldfish_Fins}
              skeleton={nodes.Cube001_1.skeleton}
            />
            <skinnedMesh
              name='Cube001_2'
              geometry={nodes.Cube001_2.geometry}
              material={materials['Material.016']}
              skeleton={nodes.Cube001_2.skeleton}
            />
          </group>
          <group name='Cube025' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Cube025_1'
              geometry={nodes.Cube025_1.geometry}
              material={materials.Goldfish_Fins}
              skeleton={nodes.Cube025_1.skeleton}
            />
            <skinnedMesh
              name='Cube025_2'
              geometry={nodes.Cube025_2.geometry}
              material={materials.BlueGoldfish_Main}
              skeleton={nodes.Cube025_2.skeleton}
            />
            <skinnedMesh
              name='Cube025_3'
              geometry={nodes.Cube025_3.geometry}
              material={materials.Goldfish_Light}
              skeleton={nodes.Cube025_3.skeleton}
            />
            <skinnedMesh
              name='Cube025_4'
              geometry={nodes.Cube025_4.geometry}
              material={materials.Eyes}
              skeleton={nodes.Cube025_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cute_fish_pack/BlueGoldfish.glb')
