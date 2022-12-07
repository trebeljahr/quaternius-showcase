/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Chest_Bottom_2: THREE.SkinnedMesh
    Chest_Bottom_3: THREE.SkinnedMesh
    Chest_Bottom_4: THREE.SkinnedMesh
    Chest_Bottom_5: THREE.SkinnedMesh
    Chest_Bottom_6: THREE.SkinnedMesh
    Chest_Top_2: THREE.SkinnedMesh
    Chest_Top_3: THREE.SkinnedMesh
    Chest_Top_4: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    DarkMetal: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    Gold: THREE.MeshStandardMaterial
    Gold_Dark: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName = 'Chest_Close' | 'Chest_Open' | 'Chest_Armature|Chest_Close' | 'Chest_Armature|Chest_Open'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/platformer_game_pack/Chest.glb') as unknown as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='Chest_Armature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name='Chest_Bottom_1' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Chest_Bottom_2'
              geometry={nodes.Chest_Bottom_2.geometry}
              material={materials.DarkMetal}
              skeleton={nodes.Chest_Bottom_2.skeleton}
            />
            <skinnedMesh
              name='Chest_Bottom_3'
              geometry={nodes.Chest_Bottom_3.geometry}
              material={materials.Wood}
              skeleton={nodes.Chest_Bottom_3.skeleton}
            />
            <skinnedMesh
              name='Chest_Bottom_4'
              geometry={nodes.Chest_Bottom_4.geometry}
              material={materials.Metal}
              skeleton={nodes.Chest_Bottom_4.skeleton}
            />
            <skinnedMesh
              name='Chest_Bottom_5'
              geometry={nodes.Chest_Bottom_5.geometry}
              material={materials.Gold}
              skeleton={nodes.Chest_Bottom_5.skeleton}
            />
            <skinnedMesh
              name='Chest_Bottom_6'
              geometry={nodes.Chest_Bottom_6.geometry}
              material={materials.Gold_Dark}
              skeleton={nodes.Chest_Bottom_6.skeleton}
            />
          </group>
          <group name='Chest_Top_1' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Chest_Top_2'
              geometry={nodes.Chest_Top_2.geometry}
              material={materials.DarkMetal}
              skeleton={nodes.Chest_Top_2.skeleton}
            />
            <skinnedMesh
              name='Chest_Top_3'
              geometry={nodes.Chest_Top_3.geometry}
              material={materials.Wood}
              skeleton={nodes.Chest_Top_3.skeleton}
            />
            <skinnedMesh
              name='Chest_Top_4'
              geometry={nodes.Chest_Top_4.geometry}
              material={materials.Metal}
              skeleton={nodes.Chest_Top_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/platformer_game_pack/Chest.glb')
