import * as THREE from 'three'
import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF, SkeletonUtils } from 'three-stdlib'

type ActionName = 'Death' | 'Duck' | 'HitReact' | 'Idle' | 'Jump' | 'Jump_Idle' | 'Jump_Land' | 'No' | 'Punch' | 'Run' | 'Walk' | 'Wave' | 'Weapon' | 'Yes'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Enemy: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Atlas: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = React.useRef<THREE.Group>()
  const { scene, animations } = useGLTF('/Enemy_Large-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <primitive object={nodes.Root} />
        <skinnedMesh name="Enemy" geometry={nodes.Enemy.geometry} material={materials.Atlas} skeleton={nodes.Enemy.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('/Enemy_Large-transformed.glb')
