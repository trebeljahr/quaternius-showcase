import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Trex_1: THREE.SkinnedMesh
    Trex_2: THREE.SkinnedMesh
    Trex_3: THREE.SkinnedMesh
    Trex_4: THREE.SkinnedMesh
    Trex_5: THREE.SkinnedMesh
    root: THREE.Bone
  }
  materials: {
    LightYellow: THREE.MeshStandardMaterial
    LightGreen: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName =
  | 'Armature|TRex_Attack'
  | 'Armature|TRex_Death'
  | 'Armature|TRex_Idle'
  | 'Armature|TRex_Jump'
  | 'Armature|TRex_Run'
  | 'Armature|TRex_Walk'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export function Trex2(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/Trex2.glb') as unknown as GLTFResult
  const { actions } = useAnimations(animations, group)

  console.log(actions)

  useEffect(() => {
    actions['Armature|TRex_Attack'].play()
  }, [actions])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='Armature' rotation={[-Math.PI / 2, 0, 0]} scale={300}>
            <primitive object={nodes.root} />
          </group>
          <group name='Trex' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Trex_1'
              geometry={nodes.Trex_1.geometry}
              material={materials.LightYellow}
              skeleton={nodes.Trex_1.skeleton}
            />
            <skinnedMesh
              name='Trex_2'
              geometry={nodes.Trex_2.geometry}
              material={materials.LightGreen}
              skeleton={nodes.Trex_2.skeleton}
            />
            <skinnedMesh
              name='Trex_3'
              geometry={nodes.Trex_3.geometry}
              material={materials.Green}
              skeleton={nodes.Trex_3.skeleton}
            />
            <skinnedMesh
              name='Trex_4'
              geometry={nodes.Trex_4.geometry}
              material={materials.Black}
              skeleton={nodes.Trex_4.skeleton}
            />
            <skinnedMesh
              name='Trex_5'
              geometry={nodes.Trex_5.geometry}
              material={materials.Red}
              skeleton={nodes.Trex_5.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}
