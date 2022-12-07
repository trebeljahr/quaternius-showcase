/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Crab_1: THREE.SkinnedMesh
    Crab_2: THREE.SkinnedMesh
    Crab_3: THREE.SkinnedMesh
    Crab_4: THREE.SkinnedMesh
    Body: THREE.Bone
    Head: THREE.Bone
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Main_Dark: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName =
  | 'MonsterArmature|Bite_Front'
  | 'MonsterArmature|Bite_InPlace'
  | 'MonsterArmature|Dance'
  | 'MonsterArmature|Death'
  | 'MonsterArmature|HitRecieve'
  | 'MonsterArmature|Idle'
  | 'MonsterArmature|Jump'
  | 'MonsterArmature|No'
  | 'MonsterArmature|Walk'
  | 'MonsterArmature|Yes'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/platformer_game_pack/Crab.glb') as unknown as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='MonsterArmature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Body} />
            <primitive object={nodes.Head} />
          </group>
          <group name='Crab' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Crab_1'
              geometry={nodes.Crab_1.geometry}
              material={materials.Main}
              skeleton={nodes.Crab_1.skeleton}
            />
            <skinnedMesh
              name='Crab_2'
              geometry={nodes.Crab_2.geometry}
              material={materials.Black}
              skeleton={nodes.Crab_2.skeleton}
            />
            <skinnedMesh
              name='Crab_3'
              geometry={nodes.Crab_3.geometry}
              material={materials.Main_Dark}
              skeleton={nodes.Crab_3.skeleton}
            />
            <skinnedMesh
              name='Crab_4'
              geometry={nodes.Crab_4.geometry}
              material={materials.White}
              skeleton={nodes.Crab_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/platformer_game_pack/Crab.glb')
