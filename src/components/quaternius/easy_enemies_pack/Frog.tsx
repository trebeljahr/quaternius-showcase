/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Frog_1: THREE.SkinnedMesh
    Frog_2: THREE.SkinnedMesh
    Frog_3: THREE.SkinnedMesh
    Frog_4: THREE.SkinnedMesh
    root: THREE.Bone
  }
  materials: {
    Green: THREE.MeshStandardMaterial
    Yellow: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName =
  | 'FrogArmature|Frog_Attack'
  | 'FrogArmature|Frog_Death'
  | 'FrogArmature|Frog_Idle'
  | 'FrogArmature|Frog_Jump'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/easy_enemies_pack/Frog.glb') as unknown as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='FrogArmature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.root} />
          </group>
          <group name='Frog' position={[-0.01, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Frog_1'
              geometry={nodes.Frog_1.geometry}
              material={materials.Green}
              skeleton={nodes.Frog_1.skeleton}
            />
            <skinnedMesh
              name='Frog_2'
              geometry={nodes.Frog_2.geometry}
              material={materials.Yellow}
              skeleton={nodes.Frog_2.skeleton}
            />
            <skinnedMesh
              name='Frog_3'
              geometry={nodes.Frog_3.geometry}
              material={materials.Red}
              skeleton={nodes.Frog_3.skeleton}
            />
            <skinnedMesh
              name='Frog_4'
              geometry={nodes.Frog_4.geometry}
              material={materials.Black}
              skeleton={nodes.Frog_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/easy_enemies_pack/Frog.glb')
