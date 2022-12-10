/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Butterflyfish_1: THREE.SkinnedMesh
    Butterflyfish_2: THREE.SkinnedMesh
    Butterflyfish_3: THREE.SkinnedMesh
    Butterflyfish_4: THREE.SkinnedMesh
    Main1: THREE.Bone
  }
  materials: {
    Butterfly_Dark: THREE.MeshStandardMaterial
    Butterfly_Light: THREE.MeshStandardMaterial
    Butterfly_Main: THREE.MeshStandardMaterial
    Eyes: THREE.MeshStandardMaterial
  }
}

type ActionName = 'Fish_Armature|Attack' | 'Fish_Armature|Death' | 'Fish_Armature|Out_Of_Water' | 'Fish_Armature|Swimming_Fast' | 'Fish_Armature|Swimming_Impulse' | 'Fish_Armature|Swimming_Normal'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/ButterflyFish.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="Fish_Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Main1} />
          </group>
          <group name="Butterflyfish" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Butterflyfish_1" geometry={nodes.Butterflyfish_1.geometry} material={materials.Butterfly_Dark} skeleton={nodes.Butterflyfish_1.skeleton} />
            <skinnedMesh name="Butterflyfish_2" geometry={nodes.Butterflyfish_2.geometry} material={materials.Butterfly_Light} skeleton={nodes.Butterflyfish_2.skeleton} />
            <skinnedMesh name="Butterflyfish_3" geometry={nodes.Butterflyfish_3.geometry} material={materials.Butterfly_Main} skeleton={nodes.Butterflyfish_3.skeleton} />
            <skinnedMesh name="Butterflyfish_4" geometry={nodes.Butterflyfish_4.geometry} material={materials.Eyes} skeleton={nodes.Butterflyfish_4.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/ButterflyFish.glb')
