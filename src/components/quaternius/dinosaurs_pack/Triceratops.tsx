/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAnimationsWithCleanup } from '@/hooks/useAnimationsWithCleanup'
import { GenericAnimationController } from '@/components/canvas/GenericAnimationController'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Triceratops_1: THREE.SkinnedMesh
    Triceratops_2: THREE.SkinnedMesh
    Triceratops_3: THREE.SkinnedMesh
    root: THREE.Bone
  }
  materials: {
    LightBrown: THREE.MeshStandardMaterial
    Purple: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName =
  | 'Armature|Triceratops_Attack'
  | 'Armature|Triceratops_Death'
  | 'Armature|Triceratops_Idle'
  | 'Armature|Triceratops_Jump'
  | 'Armature|Triceratops_Run'
  | 'Armature|Triceratops_Walk'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/dinosaurs_pack/Triceratops.glb') as unknown as GLTFResult
  const { actions } = useAnimationsWithCleanup(animations, group)

  return (
    <group ref={group} {...props} dispose={null} position={[0, -5.5, 0]}>
      <GenericAnimationController actions={actions} />
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='Armature' rotation={[-Math.PI / 2, 0, 0]} scale={200}>
            <primitive object={nodes.root} />
          </group>
          <group name='Triceratops' rotation={[-0.47, 0, -Math.PI / 2]} scale={162.34}>
            <skinnedMesh
              name='Triceratops_1'
              geometry={nodes.Triceratops_1.geometry}
              material={materials.LightBrown}
              skeleton={nodes.Triceratops_1.skeleton}
            />
            <skinnedMesh
              name='Triceratops_2'
              geometry={nodes.Triceratops_2.geometry}
              material={materials.Purple}
              skeleton={nodes.Triceratops_2.skeleton}
            />
            <skinnedMesh
              name='Triceratops_3'
              geometry={nodes.Triceratops_3.geometry}
              material={materials.Brown}
              skeleton={nodes.Triceratops_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/dinosaurs_pack/Triceratops.glb')
