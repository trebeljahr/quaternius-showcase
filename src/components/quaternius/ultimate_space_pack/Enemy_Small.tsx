import * as THREE from 'three'
import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF, SkeletonUtils } from 'three-stdlib'

type ActionName = 'Death' | 'Fast_Flying' | 'Flying_Idle' | 'Headbutt' | 'HitReact' | 'No' | 'Punch' | 'Yes'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Enemy_Small: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Atlas: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = React.useRef<THREE.Group>()
  const { scene, animations } = useGLTF('/Enemy_Small-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <primitive object={nodes.Root} />
        <skinnedMesh name="Enemy_Small" geometry={nodes.Enemy_Small.geometry} material={materials.Atlas} skeleton={nodes.Enemy_Small.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('/Enemy_Small-transformed.glb')
