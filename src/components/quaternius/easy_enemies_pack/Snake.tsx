/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Snake_1: THREE.SkinnedMesh
    Snake_2: THREE.SkinnedMesh
    Snake_3: THREE.SkinnedMesh
    Snake_4: THREE.SkinnedMesh
    Snake_5: THREE.SkinnedMesh
    Snake_6: THREE.SkinnedMesh
    Snake_7: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    DarkGreen: THREE.MeshStandardMaterial
    LightGreen: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
    Teeth: THREE.MeshStandardMaterial
    Purple: THREE.MeshStandardMaterial
    Yellow: THREE.MeshStandardMaterial
    DarkRed: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName =
  | 'SnakeArmature|Snake_Attack'
  | 'SnakeArmature|Snake_Idle'
  | 'SnakeArmature|Snake_Jump'
  | 'SnakeArmature|Snake_Walk'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/easy_enemies_pack/Snake.glb') as unknown as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='SnakeArmature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name='Snake' position={[0, 0.02, -0.03]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Snake_1'
              geometry={nodes.Snake_1.geometry}
              material={materials.DarkGreen}
              skeleton={nodes.Snake_1.skeleton}
            />
            <skinnedMesh
              name='Snake_2'
              geometry={nodes.Snake_2.geometry}
              material={materials.LightGreen}
              skeleton={nodes.Snake_2.skeleton}
            />
            <skinnedMesh
              name='Snake_3'
              geometry={nodes.Snake_3.geometry}
              material={materials.Red}
              skeleton={nodes.Snake_3.skeleton}
            />
            <skinnedMesh
              name='Snake_4'
              geometry={nodes.Snake_4.geometry}
              material={materials.Teeth}
              skeleton={nodes.Snake_4.skeleton}
            />
            <skinnedMesh
              name='Snake_5'
              geometry={nodes.Snake_5.geometry}
              material={materials.Purple}
              skeleton={nodes.Snake_5.skeleton}
            />
            <skinnedMesh
              name='Snake_6'
              geometry={nodes.Snake_6.geometry}
              material={materials.Yellow}
              skeleton={nodes.Snake_6.skeleton}
            />
            <skinnedMesh
              name='Snake_7'
              geometry={nodes.Snake_7.geometry}
              material={materials.DarkRed}
              skeleton={nodes.Snake_7.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/easy_enemies_pack/Snake.glb')
