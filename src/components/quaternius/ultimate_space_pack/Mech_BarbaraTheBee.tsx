import * as THREE from 'three'
import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF, SkeletonUtils } from 'three-stdlib'

type ActionName = 'Dance' | 'Death' | 'Hello' | 'HitRecieve_1' | 'HitRecieve_2' | 'Idle' | 'Jump' | 'Jump_Landing' | 'Jump_NoHeight' | 'Kick' | 'No' | 'Pickup' | 'Run' | 'Shoot_Big' | 'Shoot_Small' | 'Walk' | 'Yes'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    BarbaraTheBee: THREE.SkinnedMesh
    Body: THREE.Bone
    FootL: THREE.Bone
    FootR: THREE.Bone
  }
  materials: {
    Atlas: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = React.useRef<THREE.Group>()
  const { scene, animations } = useGLTF('/Mech_BarbaraTheBee-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="RobotArmature">
          <primitive object={nodes.Body} />
          <primitive object={nodes.FootL} />
          <primitive object={nodes.FootR} />
        </group>
        <skinnedMesh name="BarbaraTheBee" geometry={nodes.BarbaraTheBee.geometry} material={materials.Atlas} skeleton={nodes.BarbaraTheBee.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('/Mech_BarbaraTheBee-transformed.glb')
