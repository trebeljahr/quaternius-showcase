import Rapier from '@dimforge/rapier3d-compat'
import { Box, KeyboardControls, PointerLockControls, useKeyboardControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { CapsuleCollider, RigidBody, RigidBodyApi, useRapier } from '@react-three/rapier'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Vector3 } from 'three'

const idealCameraPosition = new THREE.Vector3()
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()
const rotation = new THREE.Vector3()

const accelerationTimeAirborne = 0.2
const accelerationTimeGrounded = 0.025

const timeToJumpApex = 1.2
const maxJumpHeight = 10
const minJumpHeight = 6
const jumpGravity = -(1.5 * maxJumpHeight) / Math.pow(timeToJumpApex, 1.5)
const maxJumpVelocity = Math.abs(jumpGravity) * timeToJumpApex
const minJumpVelocity = Math.sqrt(2 * Math.abs(jumpGravity) * minJumpHeight)

const velocityXZSmoothing = 0.2
const velocityXZMin = 0.0001

export const FirstPersonController = (props: JSX.IntrinsicElements['group']) => {
  const [, get] = useKeyboardControls()

  const camera = useThree((state) => state.camera)
  const rapier = useRapier()

  const characterRigidBody = useRef<RigidBodyApi>(null!)

  const characterController = useRef<Rapier.KinematicCharacterController>(null!)

  const velocity = useRef({ x: 0, z: 0 })

  const holdingJump = useRef(false)
  const jumpVelocity = useRef(0)
  const jumpTime = useRef(0)

  useEffect(() => {
    const world = rapier.world.raw()

    characterController.current = world.createCharacterController(0.1)
    characterController.current.enableAutostep(0.7, 0.3, true)
    characterController.current.enableSnapToGround(0.7)
    characterController.current.setApplyImpulsesToDynamicBodies(true)

    return () => {
      characterController.current.free()
      characterController.current = null!
    }
  }, [rapier.world])

  useFrame((state, delta) => {
    if (!characterRigidBody.current || !characterController.current) return

    const { forward, backward, left, right, jump, sprint } = get()
    const speed = 15 * delta * (sprint ? 1.5 : 1)

    const grounded = characterController.current.computedGrounded()

    let smoothing = velocityXZSmoothing
    smoothing *= grounded ? accelerationTimeGrounded : accelerationTimeAirborne

    const factor = 1 - Math.pow(smoothing, delta)

    frontVector.set(0, 0, Number(backward) - Number(forward))
    sideVector.set(Number(left) - Number(right), 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(speed).applyEuler(camera.rotation)

    const targetVelocity = {
      x: direction.x,
      z: direction.z,
    }

    velocity.current = {
      x: THREE.MathUtils.lerp(velocity.current.x, targetVelocity.x, factor),
      z: THREE.MathUtils.lerp(velocity.current.z, targetVelocity.z, factor),
    }

    let movementDirection = {
      x: velocity.current.x,
      y: jumpVelocity.current * factor,
      z: velocity.current.z,
    }

    if (Math.abs(movementDirection.x) < velocityXZMin) {
      movementDirection.x = 0
    }

    if (Math.abs(movementDirection.z) < velocityXZMin) {
      movementDirection.z = 0
    }

    if ((jump && grounded) || holdingJump.current) {
      holdingJump.current = true
      jumpTime.current = state.clock.elapsedTime
      jumpVelocity.current = maxJumpVelocity
    }

    if ((holdingJump.current && !jump) || jumpTime.current + timeToJumpApex > state.clock.elapsedTime) {
      holdingJump.current = false

      if (jumpVelocity.current > minJumpVelocity) {
        jumpVelocity.current = minJumpVelocity
      }
    }

    if (!jump && grounded) {
      jumpVelocity.current = 0
    } else {
      jumpVelocity.current += jumpGravity * factor
    }

    const characterCollider = characterRigidBody.current.raw().collider(0)

    characterController.current.computeColliderMovement(characterCollider, movementDirection)

    const movement = characterController.current.computedMovement()
    const newPos = characterRigidBody.current.translation()
    newPos.x += movement.x
    newPos.y += movement.y
    newPos.z += movement.z

    characterRigidBody.current.setNextKinematicTranslation(newPos)

    const rigidBodyTranslation = characterRigidBody.current.translation()
    if (characterRigidBody.current.translation().y <= -30) {
      characterRigidBody.current.setNextKinematicTranslation(new Vector3(0, 0, 0))
    }
    idealCameraPosition.set(rigidBodyTranslation.x, rigidBodyTranslation.y, rigidBodyTranslation.z)
    camera.position.lerp(idealCameraPosition, 100 * delta)
  })

  return (
    <>
      <RigidBody
        {...props}
        ref={characterRigidBody}
        colliders={false}
        mass={1}
        type='kinematicPosition'
        position={[0, 20, 0]}
        enabledRotations={[false, false, false]}>
        <CapsuleCollider args={[0.5, 0.5]} />
      </RigidBody>
      <PointerLockControls makeDefault />
    </>
  )
}
