/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Tank_Gun_1: THREE.Mesh
    Tank_Gun_2: THREE.Mesh
    Tank_Gun_3: THREE.Mesh
    Tank_Turret_1: THREE.Mesh
    Tank_Turret_2: THREE.Mesh
    Tank_body001_1: THREE.SkinnedMesh
    Tank_body001_2: THREE.SkinnedMesh
    Tank_body001_3: THREE.SkinnedMesh
    Tank_body001_4: THREE.SkinnedMesh
    Tank_body001_5: THREE.SkinnedMesh
    TrackMeshR: THREE.SkinnedMesh
    TrackMeshL: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Main_Dark: THREE.MeshStandardMaterial
    Main_Details: THREE.MeshStandardMaterial
    Main_Light: THREE.MeshStandardMaterial
    Wheels: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName =
  | 'TankArmature|Tank_Backwards'
  | 'TankArmature|Tank_Forward'
  | 'TankArmature|Tank_TurningLeft'
  | 'TankArmature|Tank_TurningRight'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/tank_pack/Tank4.glb') as unknown as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='TankArmature' position={[0, 1.3, 3.93]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name='Tank_Gun' position={[1.37, 5.27, -0.07]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh name='Tank_Gun_1' geometry={nodes.Tank_Gun_1.geometry} material={materials.Main} />
            <mesh name='Tank_Gun_2' geometry={nodes.Tank_Gun_2.geometry} material={materials.Main_Details} />
            <mesh name='Tank_Gun_3' geometry={nodes.Tank_Gun_3.geometry} material={materials.Main_Light} />
          </group>
          <group name='Tank_Turret' position={[1.47, 4.93, -0.07]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh name='Tank_Turret_1' geometry={nodes.Tank_Turret_1.geometry} material={materials.Main} />
            <mesh name='Tank_Turret_2' geometry={nodes.Tank_Turret_2.geometry} material={materials.Main_Dark} />
          </group>
          <group name='Tank_body001' position={[0, 1.3, -0.07]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Tank_body001_1'
              geometry={nodes.Tank_body001_1.geometry}
              material={materials.Main_Details}
              skeleton={nodes.Tank_body001_1.skeleton}
            />
            <skinnedMesh
              name='Tank_body001_2'
              geometry={nodes.Tank_body001_2.geometry}
              material={materials.Main}
              skeleton={nodes.Tank_body001_2.skeleton}
            />
            <skinnedMesh
              name='Tank_body001_3'
              geometry={nodes.Tank_body001_3.geometry}
              material={materials.Main_Light}
              skeleton={nodes.Tank_body001_3.skeleton}
            />
            <skinnedMesh
              name='Tank_body001_4'
              geometry={nodes.Tank_body001_4.geometry}
              material={materials.Main_Dark}
              skeleton={nodes.Tank_body001_4.skeleton}
            />
            <skinnedMesh
              name='Tank_body001_5'
              geometry={nodes.Tank_body001_5.geometry}
              material={materials.Wheels}
              skeleton={nodes.Tank_body001_5.skeleton}
            />
          </group>
          <skinnedMesh
            name='TrackMeshR'
            geometry={nodes.TrackMeshR.geometry}
            material={materials.Main_Details}
            skeleton={nodes.TrackMeshR.skeleton}
            position={[0, 1.3, -4.04]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <skinnedMesh
            name='TrackMeshL'
            geometry={nodes.TrackMeshL.geometry}
            material={materials.Main_Details}
            skeleton={nodes.TrackMeshL.skeleton}
            position={[0, 1.3, 3.93]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/tank_pack/Tank4.glb')
