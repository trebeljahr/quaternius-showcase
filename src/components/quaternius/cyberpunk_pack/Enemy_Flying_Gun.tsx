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
    Sphere001_1: THREE.SkinnedMesh
    Sphere001_2: THREE.SkinnedMesh
    Sphere001_3: THREE.SkinnedMesh
    Sphere001_4: THREE.SkinnedMesh
    Sphere001_5: THREE.SkinnedMesh
    Sphere001_6: THREE.SkinnedMesh
    Sphere001_7: THREE.SkinnedMesh
    Cube000_1: THREE.SkinnedMesh
    Cube000_2: THREE.SkinnedMesh
    Cube000_3: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
    LightGrey: THREE.MeshStandardMaterial
    Main2: THREE.MeshStandardMaterial
    Edge: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName =
  | 'CharacterArmature|Attack'
  | 'CharacterArmature|Dead'
  | 'CharacterArmature|Idle'
  | 'CharacterArmature|Run'
  | 'CharacterArmature|Shoot'
  | 'CharacterArmature|Walk'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/cyberpunk_pack/Enemy_Flying_Gun.glb') as unknown as GLTFResult
  const { actions } = useAnimationsWithCleanup(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <GenericAnimationController actions={actions} />
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='CharacterArmature' rotation={[-Math.PI / 2, 0, 0]}>
            <primitive object={nodes.Root} />
          </group>

          <group name='Sphere001' position={[0, 0.47, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <skinnedMesh
              name='Sphere001_1'
              geometry={nodes.Sphere001_1.geometry}
              material={materials['Material.002']}
              skeleton={nodes.Sphere001_1.skeleton}
            />
            <skinnedMesh
              name='Sphere001_2'
              geometry={nodes.Sphere001_2.geometry}
              material={materials['Material.001']}
              skeleton={nodes.Sphere001_2.skeleton}
            />
            <skinnedMesh
              name='Sphere001_3'
              geometry={nodes.Sphere001_3.geometry}
              material={materials['Material.004']}
              skeleton={nodes.Sphere001_3.skeleton}
            />
            <skinnedMesh
              name='Sphere001_4'
              geometry={nodes.Sphere001_4.geometry}
              material={materials['Material.003']}
              skeleton={nodes.Sphere001_4.skeleton}
            />
            <skinnedMesh
              name='Sphere001_5'
              geometry={nodes.Sphere001_5.geometry}
              material={materials.Material}
              skeleton={nodes.Sphere001_5.skeleton}
            />
            <skinnedMesh
              name='Sphere001_6'
              geometry={nodes.Sphere001_6.geometry}
              material={materials.Grey}
              skeleton={nodes.Sphere001_6.skeleton}
            />
            <skinnedMesh
              name='Sphere001_7'
              geometry={nodes.Sphere001_7.geometry}
              material={materials.LightGrey}
              skeleton={nodes.Sphere001_7.skeleton}
            />
          </group>
          <group name='Cube000' position={[0, 0.19, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <skinnedMesh
              name='Cube000_1'
              geometry={nodes.Cube000_1.geometry}
              material={materials.Main2}
              skeleton={nodes.Cube000_1.skeleton}
            />
            <skinnedMesh
              name='Cube000_2'
              geometry={nodes.Cube000_2.geometry}
              material={materials.Edge}
              skeleton={nodes.Cube000_2.skeleton}
            />
            <skinnedMesh
              name='Cube000_3'
              geometry={nodes.Cube000_3.geometry}
              material={materials.Main}
              skeleton={nodes.Cube000_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cyberpunk_pack/Enemy_Flying_Gun.glb')
