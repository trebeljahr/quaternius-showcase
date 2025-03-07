import * as THREE from 'three'
import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF, SkeletonUtils } from 'three-stdlib'

type ActionName =
  | 'Death'
  | 'Duck'
  | 'HitReact'
  | 'Idle'
  | 'Idle_Gun'
  | 'Jump'
  | 'Jump_Idle'
  | 'Jump_Land'
  | 'No'
  | 'Punch'
  | 'Run'
  | 'Run_Gun'
  | 'Run_Gun_Shoot'
  | 'Walk'
  | 'Walk_Gun'
  | 'Wave'
  | 'Weapon'
  | 'Yes'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Pistol: THREE.Mesh
    FinnTheFrog: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Atlas: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = React.useRef<THREE.Group>()
  const { scene, animations } = useGLTF('/Astronaut_FinnTheFrog-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <primitive object={nodes.Root} />
        <skinnedMesh
          name='FinnTheFrog'
          geometry={nodes.FinnTheFrog.geometry}
          material={materials.Atlas}
          skeleton={nodes.FinnTheFrog.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Astronaut_FinnTheFrog-transformed.glb')
