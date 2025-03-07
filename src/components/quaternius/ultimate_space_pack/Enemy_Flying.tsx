import * as THREE from 'three'
import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF, SkeletonUtils } from 'three-stdlib'
import { GenericAnimationController } from '@/components/canvas/GenericAnimationController'

type ActionName = 'Death' | 'Fast_Flying' | 'Flying_Idle' | 'Headbutt' | 'HitReact' | 'No' | 'Punch' | 'Yes'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Enemy_Flying: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Glub_Main: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = React.useRef<THREE.Group>()
  const { scene, animations } = useGLTF('/glb/ultimate_space_pack/Enemy_Flying-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as unknown as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <GenericAnimationController actions={actions} />

      <group name='Scene'>
        <primitive object={nodes.Root} />
        <skinnedMesh
          name='Enemy_Flying'
          geometry={nodes.Enemy_Flying.geometry}
          material={materials.Glub_Main}
          skeleton={nodes.Enemy_Flying.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/ultimate_space_pack/Enemy_Flying-transformed.glb')
