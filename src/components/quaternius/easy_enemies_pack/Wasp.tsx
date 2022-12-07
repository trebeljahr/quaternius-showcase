/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Wasp_1: THREE.SkinnedMesh
    Wasp_2: THREE.SkinnedMesh
    Wasp_3: THREE.SkinnedMesh
    Wasp_4: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    Orange: THREE.MeshStandardMaterial
    Yellow: THREE.MeshStandardMaterial
    LightBlue: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName = 'WaspArmature|Wasp_Attack' | 'WaspArmature|Wasp_Death' | 'WaspArmature|Wasp_Flying'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/easy_enemies_pack/Wasp.glb') as unknown as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='WaspArmature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name='Wasp' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Wasp_1'
              geometry={nodes.Wasp_1.geometry}
              material={materials.Black}
              skeleton={nodes.Wasp_1.skeleton}
            />
            <skinnedMesh
              name='Wasp_2'
              geometry={nodes.Wasp_2.geometry}
              material={materials.Orange}
              skeleton={nodes.Wasp_2.skeleton}
            />
            <skinnedMesh
              name='Wasp_3'
              geometry={nodes.Wasp_3.geometry}
              material={materials.Yellow}
              skeleton={nodes.Wasp_3.skeleton}
            />
            <skinnedMesh
              name='Wasp_4'
              geometry={nodes.Wasp_4.geometry}
              material={materials.LightBlue}
              skeleton={nodes.Wasp_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/easy_enemies_pack/Wasp.glb')
