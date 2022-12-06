/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    George: THREE.SkinnedMesh
    Body: THREE.Bone
    FootL: THREE.Bone
    FootR: THREE.Bone
  }
  materials: {
    George_Texture: THREE.MeshStandardMaterial
  }
}

type ActionName =
  | 'RobotArmature|Dance'
  | 'RobotArmature|Death'
  | 'RobotArmature|Hello'
  | 'RobotArmature|HitRecieve_1'
  | 'RobotArmature|HitRecieve_2'
  | 'RobotArmature|Idle'
  | 'RobotArmature|Jump'
  | 'RobotArmature|Kick'
  | 'RobotArmature|No'
  | 'RobotArmature|Pickup'
  | 'RobotArmature|Punch'
  | 'RobotArmature|Run'
  | 'RobotArmature|Run_Holding'
  | 'RobotArmature|Run_Tall'
  | 'RobotArmature|Shoot'
  | 'RobotArmature|SwordSlash'
  | 'RobotArmature|Walk'
  | 'RobotArmature|Walk_Holding'
  | 'RobotArmature|Walk_Tall'
  | 'RobotArmature|Yes'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/George.glb') as unknown as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='RobotArmature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Body} />
            <primitive object={nodes.FootL} />
            <primitive object={nodes.FootR} />
          </group>
          <skinnedMesh
            name='George'
            geometry={nodes.George.geometry}
            material={materials.George_Texture}
            skeleton={nodes.George.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/George.glb')
