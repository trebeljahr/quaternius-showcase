import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, useKeyboardControls } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame, useThree } from '@react-three/fiber'
import { AnimationAction, AnimationClip, AnimationMixer, LoopOnce, Object3D, Vector3 } from 'three'

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

interface PossibleActions {
  'Armature|TRex_Attack': THREE.AnimationAction
  'Armature|TRex_Death': THREE.AnimationAction
  'Armature|TRex_Idle': THREE.AnimationAction
  'Armature|TRex_Jump': THREE.AnimationAction
  'Armature|TRex_Run': THREE.AnimationAction
  'Armature|TRex_Walk': THREE.AnimationAction
}

// const rotationSpeed = 20
// const speed = 0.5

export function FollowingTrex() {
  const group = useRef<THREE.Group>()
  const { camera } = useThree()

  useFrame(() => {
    const cameraPosInPlane = camera.position.clone().normalize().setY(0)
    group.current.lookAt(cameraPosInPlane)

    const direction = cameraPosInPlane.sub(group.current.position)
    // const distance = direction.length()
  })

  return (
    <group position={new Vector3(0, 0, -30)} ref={group}>
      <Trex />
    </group>
  )
}

function usePrevious<T>(value: T) {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

function AnimationController({ actions }: { actions: PossibleActions }) {
  const [state, setState] = useState<ActionName>('Armature|TRex_Idle')

  const [subscribe] = useKeyboardControls()

  useEffect(() => {
    subscribe((state) => {
      // console.log({ state })
      const { attack, jump, forward, backward, left, right } = state
      if (attack) {
        actions['Armature|TRex_Attack'].setLoop(LoopOnce, 1)
        actions['Armature|TRex_Attack'].clampWhenFinished = true
        actions['Armature|TRex_Attack'].reset().play()
      }
      if (jump) {
        if (!actions['Armature|TRex_Jump'].isRunning()) {
          actions['Armature|TRex_Jump'].setLoop(LoopOnce, 1)
          actions['Armature|TRex_Jump'].clampWhenFinished = true
          actions['Armature|TRex_Jump'].reset().play()
        }
      }
      if (forward || backward || left || right) {
        return setState('Armature|TRex_Run')
      }
      setState('Armature|TRex_Idle')
    })
  }, [actions, subscribe])

  useEffect(() => {
    const timeBetween = 0.5
    const currentAction = actions[state].reset().fadeIn(timeBetween).play()

    return () => {
      currentAction.fadeOut(timeBetween)
    }
  }, [state, actions])

  return null
}

export function Trex(props: JSX.IntrinsicElements['group'] & { withAnimations?: boolean }) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/Trex.glb') as unknown as GLTFResult
  const { withAnimations = false } = props
  const { actions } = useAnimations(animations, group)

  return (
    <group ref={group} {...props} dispose={null}>
      {withAnimations && <AnimationController actions={actions} />}{' '}
      <group name='Armature' rotation={[-Math.PI / 2, 0, 0.05]} scale={300}>
        <primitive object={nodes.root} />
      </group>
      <group name='Trex' rotation={[-Math.PI / 2, 0, 0.05]} scale={100}>
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
  )
}
