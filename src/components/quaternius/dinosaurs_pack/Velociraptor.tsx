/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Velociraptor_1: THREE.SkinnedMesh
    Velociraptor_2: THREE.SkinnedMesh
    Velociraptor_3: THREE.SkinnedMesh
    root: THREE.Bone
  }
  materials: {
    LightBrown: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

type ActionName =
  | 'Armature|Velociraptor_Attack'
  | 'Armature|Velociraptor_Death'
  | 'Armature|Velociraptor_Idle'
  | 'Armature|Velociraptor_Jump'
  | 'Armature|Velociraptor_Run'
  | 'Armature|Velociraptor_Walk'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/Velociraptor.glb') as unknown as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='Armature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.root} />
          </group>
          <group name='Velociraptor' rotation={[-Math.PI / 2, 0, 0]} scale={351.94}>
            <skinnedMesh
              name='Velociraptor_1'
              geometry={nodes.Velociraptor_1.geometry}
              material={materials.LightBrown}
              skeleton={nodes.Velociraptor_1.skeleton}
            />
            <skinnedMesh
              name='Velociraptor_2'
              geometry={nodes.Velociraptor_2.geometry}
              material={materials.Brown}
              skeleton={nodes.Velociraptor_2.skeleton}
            />
            <skinnedMesh
              name='Velociraptor_3'
              geometry={nodes.Velociraptor_3.geometry}
              material={materials.Black}
              skeleton={nodes.Velociraptor_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Velociraptor.glb')
