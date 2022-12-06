/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Stegosaurus_1: THREE.SkinnedMesh
    Stegosaurus_2: THREE.SkinnedMesh
    Stegosaurus_3: THREE.SkinnedMesh
    root: THREE.Bone
  }
  materials: {
    LightBrown: THREE.MeshStandardMaterial
    DarkBrown: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
  }
}

type ActionName =
  | 'Armature|Stegosaurus_Attack'
  | 'Armature|Stegosaurus_Death'
  | 'Armature|Stegosaurus_Idle'
  | 'Armature|Stegosaurus_Jump'
  | 'Armature|Stegosaurus_Run'
  | 'Armature|Stegosaurus_Walk'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/Stegosaurus.glb') as unknown as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='Armature' rotation={[-Math.PI / 2, 0, 0]} scale={200}>
            <primitive object={nodes.root} />
          </group>
          <group name='Stegosaurus' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Stegosaurus_1'
              geometry={nodes.Stegosaurus_1.geometry}
              material={materials.LightBrown}
              skeleton={nodes.Stegosaurus_1.skeleton}
            />
            <skinnedMesh
              name='Stegosaurus_2'
              geometry={nodes.Stegosaurus_2.geometry}
              material={materials.DarkBrown}
              skeleton={nodes.Stegosaurus_2.skeleton}
            />
            <skinnedMesh
              name='Stegosaurus_3'
              geometry={nodes.Stegosaurus_3.geometry}
              material={materials.Brown}
              skeleton={nodes.Stegosaurus_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Stegosaurus.glb')