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
    Sword_1: THREE.SkinnedMesh
    Sword_2: THREE.SkinnedMesh
    Sword_3: THREE.SkinnedMesh
    Sword_4: THREE.SkinnedMesh
    Cube007_1: THREE.SkinnedMesh
    Cube007_2: THREE.SkinnedMesh
    Cube007_3: THREE.SkinnedMesh
    Cube000: THREE.SkinnedMesh
    Cube009_1: THREE.SkinnedMesh
    Cube009_2: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Blade: THREE.MeshStandardMaterial
    Blade_Edge: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
    Accent_Dark: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName =
  | 'CharacterArmature|Death'
  | 'CharacterArmature|Gun_Shoot'
  | 'CharacterArmature|HitRecieve'
  | 'CharacterArmature|HitRecieve_2'
  | 'CharacterArmature|Idle_Gun_Pointing'
  | 'CharacterArmature|Idle_Gun_Shoot'
  | 'CharacterArmature|Idle_Neutral'
  | 'CharacterArmature|Idle_Sword'
  | 'CharacterArmature|Interact'
  | 'CharacterArmature|Kick_Left'
  | 'CharacterArmature|Kick_Right'
  | 'CharacterArmature|Punch_Left'
  | 'CharacterArmature|Punch_Right'
  | 'CharacterArmature|Roll'
  | 'CharacterArmature|Run'
  | 'CharacterArmature|Run_Back'
  | 'CharacterArmature|Run_Left'
  | 'CharacterArmature|Run_Right'
  | 'CharacterArmature|Run_Shoot'
  | 'CharacterArmature|Sword_Slash'
  | 'CharacterArmature|Walk'
  | 'CharacterArmature|Wave'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/cyberpunk_pack/Character.glb') as unknown as GLTFResult
  const { actions } = useAnimationsWithCleanup(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <GenericAnimationController actions={actions} />
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='CharacterArmature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name='Sword' position={[-0.71, 0.98, 0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Sword_1'
              geometry={nodes.Sword_1.geometry}
              material={materials.Main}
              skeleton={nodes.Sword_1.skeleton}
            />
            <skinnedMesh
              name='Sword_2'
              geometry={nodes.Sword_2.geometry}
              material={materials.Black}
              skeleton={nodes.Sword_2.skeleton}
            />
            <skinnedMesh
              name='Sword_3'
              geometry={nodes.Sword_3.geometry}
              material={materials.Blade}
              skeleton={nodes.Sword_3.skeleton}
            />
            <skinnedMesh
              name='Sword_4'
              geometry={nodes.Sword_4.geometry}
              material={materials.Blade_Edge}
              skeleton={nodes.Sword_4.skeleton}
            />
          </group>
          <group name='Cube007' position={[0, 1.03, 0.13]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Cube007_1'
              geometry={nodes.Cube007_1.geometry}
              material={materials.Main}
              skeleton={nodes.Cube007_1.skeleton}
            />
            <skinnedMesh
              name='Cube007_2'
              geometry={nodes.Cube007_2.geometry}
              material={materials.Accent}
              skeleton={nodes.Cube007_2.skeleton}
            />
            <skinnedMesh
              name='Cube007_3'
              geometry={nodes.Cube007_3.geometry}
              material={materials.Accent_Dark}
              skeleton={nodes.Cube007_3.skeleton}
            />
          </group>
          <skinnedMesh
            name='Cube000'
            geometry={nodes.Cube000.geometry}
            material={materials.Material}
            skeleton={nodes.Cube000.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <group name='Cube009' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Cube009_1'
              geometry={nodes.Cube009_1.geometry}
              material={materials.Main}
              skeleton={nodes.Cube009_1.skeleton}
            />
            <skinnedMesh
              name='Cube009_2'
              geometry={nodes.Cube009_2.geometry}
              material={materials.Black}
              skeleton={nodes.Cube009_2.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cyberpunk_pack/Character.glb')
