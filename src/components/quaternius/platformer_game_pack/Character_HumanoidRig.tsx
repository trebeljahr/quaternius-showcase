/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Body_1: THREE.SkinnedMesh
    Body_2: THREE.SkinnedMesh
    Body_3: THREE.SkinnedMesh
    Ears: THREE.SkinnedMesh
    Head_1: THREE.SkinnedMesh
    Head_2: THREE.SkinnedMesh
    Head_3: THREE.SkinnedMesh
    Head_4: THREE.SkinnedMesh
    Head_5: THREE.SkinnedMesh
    Arms_1: THREE.SkinnedMesh
    Arms_2: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Main_Light: THREE.MeshStandardMaterial
    Main2: THREE.MeshStandardMaterial
    EyeColor: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Character_HumanoidRig.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <primitive object={nodes.Root} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh geometry={nodes.Body_1.geometry} material={materials.Main} skeleton={nodes.Body_1.skeleton} />
        <skinnedMesh
          geometry={nodes.Body_2.geometry}
          material={materials.Main_Light}
          skeleton={nodes.Body_2.skeleton}
        />
        <skinnedMesh geometry={nodes.Body_3.geometry} material={materials.Main2} skeleton={nodes.Body_3.skeleton} />
      </group>
      <skinnedMesh
        geometry={nodes.Ears.geometry}
        material={materials.Main}
        skeleton={nodes.Ears.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh geometry={nodes.Head_1.geometry} material={materials.Main} skeleton={nodes.Head_1.skeleton} />
        <skinnedMesh
          geometry={nodes.Head_2.geometry}
          material={materials.Main_Light}
          skeleton={nodes.Head_2.skeleton}
        />
        <skinnedMesh geometry={nodes.Head_3.geometry} material={materials.EyeColor} skeleton={nodes.Head_3.skeleton} />
        <skinnedMesh geometry={nodes.Head_4.geometry} material={materials.White} skeleton={nodes.Head_4.skeleton} />
        <skinnedMesh geometry={nodes.Head_5.geometry} material={materials.Black} skeleton={nodes.Head_5.skeleton} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh geometry={nodes.Arms_1.geometry} material={materials.Main} skeleton={nodes.Arms_1.skeleton} />
        <skinnedMesh
          geometry={nodes.Arms_2.geometry}
          material={materials.Main_Light}
          skeleton={nodes.Arms_2.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Character_HumanoidRig.glb')