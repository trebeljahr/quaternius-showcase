/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Pistol_1: THREE.Mesh
    Pistol_2: THREE.Mesh
    Pistol_3: THREE.Mesh
    Sword_1: THREE.Mesh
    Sword_2: THREE.Mesh
    Sword_3: THREE.Mesh
    Soldier_Feet_1: THREE.SkinnedMesh
    Soldier_Feet_2: THREE.SkinnedMesh
    Soldier_Body_1: THREE.SkinnedMesh
    Soldier_Body_2: THREE.SkinnedMesh
    Soldier_Body_3: THREE.SkinnedMesh
    Worker_Legs_1: THREE.SkinnedMesh
    Worker_Legs_2: THREE.SkinnedMesh
    Worker_Feet_1: THREE.SkinnedMesh
    Worker_Feet_2: THREE.SkinnedMesh
    Suit_Legs: THREE.SkinnedMesh
    Suit_Feet_1: THREE.SkinnedMesh
    Suit_Feet_2: THREE.SkinnedMesh
    Adventurer_Legs_1: THREE.SkinnedMesh
    Adventurer_Legs_2: THREE.SkinnedMesh
    Adventurer_Legs_3: THREE.SkinnedMesh
    Adventurer_Legs_4: THREE.SkinnedMesh
    Adventurer_Legs_5: THREE.SkinnedMesh
    Adventurer_Legs_6: THREE.SkinnedMesh
    Adventurer_Body_1: THREE.SkinnedMesh
    Adventurer_Body_2: THREE.SkinnedMesh
    Adventurer_Body_3: THREE.SkinnedMesh
    Adventurer_Body_4: THREE.SkinnedMesh
    Adventurer_Body_5: THREE.SkinnedMesh
    Adventurer_Body_6: THREE.SkinnedMesh
    Punk_Feet_1: THREE.SkinnedMesh
    Punk_Feet_2: THREE.SkinnedMesh
    Punk_Body_1: THREE.SkinnedMesh
    Punk_Body_2: THREE.SkinnedMesh
    Punk_Body_3: THREE.SkinnedMesh
    Formal_Body_1: THREE.SkinnedMesh
    Formal_Body_2: THREE.SkinnedMesh
    Formal_Body_3: THREE.SkinnedMesh
    Formal_Feet_1: THREE.SkinnedMesh
    Formal_Feet_2: THREE.SkinnedMesh
    SciFi_Feet_1: THREE.SkinnedMesh
    SciFi_Feet_2: THREE.SkinnedMesh
    SciFi_Body_1: THREE.SkinnedMesh
    SciFi_Body_2: THREE.SkinnedMesh
    SciFi_Body_3: THREE.SkinnedMesh
    SciFi_Body_4: THREE.SkinnedMesh
    SciFi_Body_5: THREE.SkinnedMesh
    Medieval_Legs: THREE.SkinnedMesh
    Medieval_Body_1: THREE.SkinnedMesh
    Medieval_Body_2: THREE.SkinnedMesh
    Medieval_Body_3: THREE.SkinnedMesh
    Medieval_Body_4: THREE.SkinnedMesh
    Medieval_Body_5: THREE.SkinnedMesh
    Medieval_Body_6: THREE.SkinnedMesh
    Witch_Feet: THREE.SkinnedMesh
    Witch_Body_1: THREE.SkinnedMesh
    Witch_Body_2: THREE.SkinnedMesh
    Witch_Body_3: THREE.SkinnedMesh
    Witch_Body_4: THREE.SkinnedMesh
    Casual_Legs: THREE.SkinnedMesh
    Casual_Body_1: THREE.SkinnedMesh
    Casual_Body_2: THREE.SkinnedMesh
    Soldier_Head_1: THREE.SkinnedMesh
    Soldier_Head_2: THREE.SkinnedMesh
    Soldier_Head_3: THREE.SkinnedMesh
    Worker_Head_1: THREE.SkinnedMesh
    Worker_Head_2: THREE.SkinnedMesh
    Worker_Head_3: THREE.SkinnedMesh
    Worker_Head_4: THREE.SkinnedMesh
    Suit_Head_1: THREE.SkinnedMesh
    Suit_Head_2: THREE.SkinnedMesh
    Suit_Head_3: THREE.SkinnedMesh
    Suit_Head_4: THREE.SkinnedMesh
    Adventurer_Head_1: THREE.SkinnedMesh
    Adventurer_Head_2: THREE.SkinnedMesh
    Adventurer_Head_3: THREE.SkinnedMesh
    Punk_Head_1: THREE.SkinnedMesh
    Punk_Head_2: THREE.SkinnedMesh
    Punk_Head_3: THREE.SkinnedMesh
    Punk_Head_4: THREE.SkinnedMesh
    Punk_Head_5: THREE.SkinnedMesh
    Formad_Head_1: THREE.SkinnedMesh
    Formad_Head_2: THREE.SkinnedMesh
    Formad_Head_3: THREE.SkinnedMesh
    SciFi_Head_1: THREE.SkinnedMesh
    SciFi_Head_2: THREE.SkinnedMesh
    SciFi_Head_3: THREE.SkinnedMesh
    SciFi_Head_4: THREE.SkinnedMesh
    SciFi_Head_5: THREE.SkinnedMesh
    Medieval_Head_1: THREE.SkinnedMesh
    Medieval_Head_2: THREE.SkinnedMesh
    Medieval_Head_3: THREE.SkinnedMesh
    Medieval_Head_4: THREE.SkinnedMesh
    Medieval_Head_5: THREE.SkinnedMesh
    Witch_Head_1: THREE.SkinnedMesh
    Witch_Head_2: THREE.SkinnedMesh
    Witch_Head_3: THREE.SkinnedMesh
    Witch_Head_4: THREE.SkinnedMesh
    Witch_Head_5: THREE.SkinnedMesh
    Worker_Body_1: THREE.SkinnedMesh
    Worker_Body_2: THREE.SkinnedMesh
    Worker_Body_3: THREE.SkinnedMesh
    Worker_Body_4: THREE.SkinnedMesh
    Punk_Legs_1: THREE.SkinnedMesh
    Punk_Legs_2: THREE.SkinnedMesh
    Casual_Head_1: THREE.SkinnedMesh
    Casual_Head_2: THREE.SkinnedMesh
    Casual_Head_3: THREE.SkinnedMesh
    Casual_Head_4: THREE.SkinnedMesh
    Medieval_Feet_1: THREE.SkinnedMesh
    Medieval_Feet_2: THREE.SkinnedMesh
    Soldier_Legs_1: THREE.SkinnedMesh
    Soldier_Legs_2: THREE.SkinnedMesh
    Soldier_Legs_3: THREE.SkinnedMesh
    Suit_Body_1: THREE.SkinnedMesh
    Suit_Body_2: THREE.SkinnedMesh
    Suit_Body_3: THREE.SkinnedMesh
    Adventurer_Feet_1: THREE.SkinnedMesh
    Adventurer_Feet_2: THREE.SkinnedMesh
    Formal_Legs_1: THREE.SkinnedMesh
    Formal_Legs_2: THREE.SkinnedMesh
    SciFi_Legs_1: THREE.SkinnedMesh
    SciFi_Legs_2: THREE.SkinnedMesh
    SciFi_Legs_3: THREE.SkinnedMesh
    Witch_Legs_1: THREE.SkinnedMesh
    Witch_Legs_2: THREE.SkinnedMesh
    Witch_Legs_3: THREE.SkinnedMesh
    Casual_Feet_1: THREE.SkinnedMesh
    Casual_Feet_2: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    DarkBrown: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    Brown2: THREE.MeshStandardMaterial
    Metal_Dark: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Swat: THREE.MeshStandardMaterial
    Skin: THREE.MeshStandardMaterial
    Brown_02: THREE.MeshStandardMaterial
    Brown2: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    LightGreen: THREE.MeshStandardMaterial
    Gold: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
    Pink: THREE.MeshStandardMaterial
    LimeGreen: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    LightBlue: THREE.MeshStandardMaterial
    Blue: THREE.MeshStandardMaterial
    LightBrown: THREE.MeshStandardMaterial
    DarkBrown: THREE.MeshStandardMaterial
    Purple: THREE.MeshStandardMaterial
    Orange: THREE.MeshStandardMaterial
    Hair_Brown: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
    Worker_Yellow: THREE.MeshStandardMaterial
    Hair_Blond: THREE.MeshStandardMaterial
    Hair_Black: THREE.MeshStandardMaterial
    Worker_Vest: THREE.MeshStandardMaterial
  }
}

type ActionName =
  | 'CharacterArmature|Death'
  | 'CharacterArmature|Gun_Shoot'
  | 'CharacterArmature|HitRecieve'
  | 'CharacterArmature|HitRecieve_2'
  | 'CharacterArmature|Idle'
  | 'CharacterArmature|Idle_Gun'
  | 'CharacterArmature|Idle_Gun_Pointing'
  | 'CharacterArmature|Idle_Gun_Shoot'
  | 'CharacterArmature|Idle_Neutral'
  | 'CharacterArmature|Idle_Sword'
  | 'CharacterArmature|Interact'
  | 'CharacterArmature|Kick_Left'
  | 'CharacterArmature|Kick_Right'
  | 'CharacterArmature|Punch_Left'
  | 'CharacterArmature|Punch_Right'
  | 'CharacterArmature|Roll'
  | 'CharacterArmature|Run'
  | 'CharacterArmature|Run_Back'
  | 'CharacterArmature|Run_Left'
  | 'CharacterArmature|Run_Right'
  | 'CharacterArmature|Run_Shoot'
  | 'CharacterArmature|Sword_Slash'
  | 'CharacterArmature|Walk'
  | 'CharacterArmature|Wave'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/All together.glb') as unknown as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='CharacterArmature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name='Soldier_Feet' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Soldier_Feet_1'
              geometry={nodes.Soldier_Feet_1.geometry}
              material={materials.Grey}
              skeleton={nodes.Soldier_Feet_1.skeleton}
            />
            <skinnedMesh
              name='Soldier_Feet_2'
              geometry={nodes.Soldier_Feet_2.geometry}
              material={materials.Black}
              skeleton={nodes.Soldier_Feet_2.skeleton}
            />
          </group>
          <group name='Soldier_Body' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Soldier_Body_1'
              geometry={nodes.Soldier_Body_1.geometry}
              material={materials.Black}
              skeleton={nodes.Soldier_Body_1.skeleton}
            />
            <skinnedMesh
              name='Soldier_Body_2'
              geometry={nodes.Soldier_Body_2.geometry}
              material={materials.Swat}
              skeleton={nodes.Soldier_Body_2.skeleton}
            />
            <skinnedMesh
              name='Soldier_Body_3'
              geometry={nodes.Soldier_Body_3.geometry}
              material={materials.Skin}
              skeleton={nodes.Soldier_Body_3.skeleton}
            />
          </group>
          <group name='Worker_Legs' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Worker_Legs_1'
              geometry={nodes.Worker_Legs_1.geometry}
              material={materials.Brown_02}
              skeleton={nodes.Worker_Legs_1.skeleton}
            />
            <skinnedMesh
              name='Worker_Legs_2'
              geometry={nodes.Worker_Legs_2.geometry}
              material={materials.Brown2}
              skeleton={nodes.Worker_Legs_2.skeleton}
            />
          </group>
          <group name='Worker_Feet' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Worker_Feet_1'
              geometry={nodes.Worker_Feet_1.geometry}
              material={materials.Black}
              skeleton={nodes.Worker_Feet_1.skeleton}
            />
            <skinnedMesh
              name='Worker_Feet_2'
              geometry={nodes.Worker_Feet_2.geometry}
              material={materials.Skin}
              skeleton={nodes.Worker_Feet_2.skeleton}
            />
          </group>
          <skinnedMesh
            name='Suit_Legs'
            geometry={nodes.Suit_Legs.geometry}
            material={materials.Black}
            skeleton={nodes.Suit_Legs.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <group name='Suit_Feet' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Suit_Feet_1'
              geometry={nodes.Suit_Feet_1.geometry}
              material={materials.Black}
              skeleton={nodes.Suit_Feet_1.skeleton}
            />
            <skinnedMesh
              name='Suit_Feet_2'
              geometry={nodes.Suit_Feet_2.geometry}
              material={materials.Skin}
              skeleton={nodes.Suit_Feet_2.skeleton}
            />
          </group>
          <group name='Adventurer_Legs' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Adventurer_Legs_1'
              geometry={nodes.Adventurer_Legs_1.geometry}
              material={materials.Skin}
              skeleton={nodes.Adventurer_Legs_1.skeleton}
            />
            <skinnedMesh
              name='Adventurer_Legs_2'
              geometry={nodes.Adventurer_Legs_2.geometry}
              material={materials.Brown_02}
              skeleton={nodes.Adventurer_Legs_2.skeleton}
            />
            <skinnedMesh
              name='Adventurer_Legs_3'
              geometry={nodes.Adventurer_Legs_3.geometry}
              material={materials.Brown2}
              skeleton={nodes.Adventurer_Legs_3.skeleton}
            />
            <skinnedMesh
              name='Adventurer_Legs_4'
              geometry={nodes.Adventurer_Legs_4.geometry}
              material={materials.White}
              skeleton={nodes.Adventurer_Legs_4.skeleton}
            />
            <skinnedMesh
              name='Adventurer_Legs_5'
              geometry={nodes.Adventurer_Legs_5.geometry}
              material={materials.LightGreen}
              skeleton={nodes.Adventurer_Legs_5.skeleton}
            />
            <skinnedMesh
              name='Adventurer_Legs_6'
              geometry={nodes.Adventurer_Legs_6.geometry}
              material={materials.Gold}
              skeleton={nodes.Adventurer_Legs_6.skeleton}
            />
          </group>
          <group name='Adventurer_Body' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Adventurer_Body_1'
              geometry={nodes.Adventurer_Body_1.geometry}
              material={materials.Skin}
              skeleton={nodes.Adventurer_Body_1.skeleton}
            />
            <skinnedMesh
              name='Adventurer_Body_2'
              geometry={nodes.Adventurer_Body_2.geometry}
              material={materials.Brown2}
              skeleton={nodes.Adventurer_Body_2.skeleton}
            />
            <skinnedMesh
              name='Adventurer_Body_3'
              geometry={nodes.Adventurer_Body_3.geometry}
              material={materials.White}
              skeleton={nodes.Adventurer_Body_3.skeleton}
            />
            <skinnedMesh
              name='Adventurer_Body_4'
              geometry={nodes.Adventurer_Body_4.geometry}
              material={materials.LightGreen}
              skeleton={nodes.Adventurer_Body_4.skeleton}
            />
            <skinnedMesh
              name='Adventurer_Body_5'
              geometry={nodes.Adventurer_Body_5.geometry}
              material={materials.Gold}
              skeleton={nodes.Adventurer_Body_5.skeleton}
            />
            <skinnedMesh
              name='Adventurer_Body_6'
              geometry={nodes.Adventurer_Body_6.geometry}
              material={materials.Green}
              skeleton={nodes.Adventurer_Body_6.skeleton}
            />
          </group>
          <group name='Punk_Feet' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Punk_Feet_1'
              geometry={nodes.Punk_Feet_1.geometry}
              material={materials.Grey}
              skeleton={nodes.Punk_Feet_1.skeleton}
            />
            <skinnedMesh
              name='Punk_Feet_2'
              geometry={nodes.Punk_Feet_2.geometry}
              material={materials.Black}
              skeleton={nodes.Punk_Feet_2.skeleton}
            />
          </group>
          <group name='Punk_Body' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Punk_Body_1'
              geometry={nodes.Punk_Body_1.geometry}
              material={materials.Black}
              skeleton={nodes.Punk_Body_1.skeleton}
            />
            <skinnedMesh
              name='Punk_Body_2'
              geometry={nodes.Punk_Body_2.geometry}
              material={materials.Skin}
              skeleton={nodes.Punk_Body_2.skeleton}
            />
            <skinnedMesh
              name='Punk_Body_3'
              geometry={nodes.Punk_Body_3.geometry}
              material={materials.Pink}
              skeleton={nodes.Punk_Body_3.skeleton}
            />
          </group>
          <group name='Formal_Body' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Formal_Body_1'
              geometry={nodes.Formal_Body_1.geometry}
              material={materials.Skin}
              skeleton={nodes.Formal_Body_1.skeleton}
            />
            <skinnedMesh
              name='Formal_Body_2'
              geometry={nodes.Formal_Body_2.geometry}
              material={materials.Gold}
              skeleton={nodes.Formal_Body_2.skeleton}
            />
            <skinnedMesh
              name='Formal_Body_3'
              geometry={nodes.Formal_Body_3.geometry}
              material={materials.LimeGreen}
              skeleton={nodes.Formal_Body_3.skeleton}
            />
          </group>
          <group name='Formal_Feet' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Formal_Feet_1'
              geometry={nodes.Formal_Feet_1.geometry}
              material={materials.Skin}
              skeleton={nodes.Formal_Feet_1.skeleton}
            />
            <skinnedMesh
              name='Formal_Feet_2'
              geometry={nodes.Formal_Feet_2.geometry}
              material={materials.Red}
              skeleton={nodes.Formal_Feet_2.skeleton}
            />
          </group>
          <group name='SciFi_Feet' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='SciFi_Feet_1'
              geometry={nodes.SciFi_Feet_1.geometry}
              material={materials.Black}
              skeleton={nodes.SciFi_Feet_1.skeleton}
            />
            <skinnedMesh
              name='SciFi_Feet_2'
              geometry={nodes.SciFi_Feet_2.geometry}
              material={materials.Metal}
              skeleton={nodes.SciFi_Feet_2.skeleton}
            />
          </group>
          <group name='SciFi_Body' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='SciFi_Body_1'
              geometry={nodes.SciFi_Body_1.geometry}
              material={materials.Black}
              skeleton={nodes.SciFi_Body_1.skeleton}
            />
            <skinnedMesh
              name='SciFi_Body_2'
              geometry={nodes.SciFi_Body_2.geometry}
              material={materials.Skin}
              skeleton={nodes.SciFi_Body_2.skeleton}
            />
            <skinnedMesh
              name='SciFi_Body_3'
              geometry={nodes.SciFi_Body_3.geometry}
              material={materials.Metal}
              skeleton={nodes.SciFi_Body_3.skeleton}
            />
            <skinnedMesh
              name='SciFi_Body_4'
              geometry={nodes.SciFi_Body_4.geometry}
              material={materials.LightBlue}
              skeleton={nodes.SciFi_Body_4.skeleton}
            />
            <skinnedMesh
              name='SciFi_Body_5'
              geometry={nodes.SciFi_Body_5.geometry}
              material={materials.Blue}
              skeleton={nodes.SciFi_Body_5.skeleton}
            />
          </group>
          <skinnedMesh
            name='Medieval_Legs'
            geometry={nodes.Medieval_Legs.geometry}
            material={materials.Black}
            skeleton={nodes.Medieval_Legs.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <group name='Medieval_Body' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Medieval_Body_1'
              geometry={nodes.Medieval_Body_1.geometry}
              material={materials.Black}
              skeleton={nodes.Medieval_Body_1.skeleton}
            />
            <skinnedMesh
              name='Medieval_Body_2'
              geometry={nodes.Medieval_Body_2.geometry}
              material={materials.Skin}
              skeleton={nodes.Medieval_Body_2.skeleton}
            />
            <skinnedMesh
              name='Medieval_Body_3'
              geometry={nodes.Medieval_Body_3.geometry}
              material={materials.Gold}
              skeleton={nodes.Medieval_Body_3.skeleton}
            />
            <skinnedMesh
              name='Medieval_Body_4'
              geometry={nodes.Medieval_Body_4.geometry}
              material={materials.Metal}
              skeleton={nodes.Medieval_Body_4.skeleton}
            />
            <skinnedMesh
              name='Medieval_Body_5'
              geometry={nodes.Medieval_Body_5.geometry}
              material={materials.LightBrown}
              skeleton={nodes.Medieval_Body_5.skeleton}
            />
            <skinnedMesh
              name='Medieval_Body_6'
              geometry={nodes.Medieval_Body_6.geometry}
              material={materials.DarkBrown}
              skeleton={nodes.Medieval_Body_6.skeleton}
            />
          </group>
          <skinnedMesh
            name='Witch_Feet'
            geometry={nodes.Witch_Feet.geometry}
            material={materials.Brown2}
            skeleton={nodes.Witch_Feet.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <group name='Witch_Body' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Witch_Body_1'
              geometry={nodes.Witch_Body_1.geometry}
              material={materials.Skin}
              skeleton={nodes.Witch_Body_1.skeleton}
            />
            <skinnedMesh
              name='Witch_Body_2'
              geometry={nodes.Witch_Body_2.geometry}
              material={materials.Brown2}
              skeleton={nodes.Witch_Body_2.skeleton}
            />
            <skinnedMesh
              name='Witch_Body_3'
              geometry={nodes.Witch_Body_3.geometry}
              material={materials.Gold}
              skeleton={nodes.Witch_Body_3.skeleton}
            />
            <skinnedMesh
              name='Witch_Body_4'
              geometry={nodes.Witch_Body_4.geometry}
              material={materials.Purple}
              skeleton={nodes.Witch_Body_4.skeleton}
            />
          </group>
          <skinnedMesh
            name='Casual_Legs'
            geometry={nodes.Casual_Legs.geometry}
            material={materials.Orange}
            skeleton={nodes.Casual_Legs.skeleton}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <group name='Casual_Body' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Casual_Body_1'
              geometry={nodes.Casual_Body_1.geometry}
              material={materials.Skin}
              skeleton={nodes.Casual_Body_1.skeleton}
            />
            <skinnedMesh
              name='Casual_Body_2'
              geometry={nodes.Casual_Body_2.geometry}
              material={materials.White}
              skeleton={nodes.Casual_Body_2.skeleton}
            />
          </group>
          <group name='Soldier_Head' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Soldier_Head_1'
              geometry={nodes.Soldier_Head_1.geometry}
              material={materials.Skin}
              skeleton={nodes.Soldier_Head_1.skeleton}
            />
            <skinnedMesh
              name='Soldier_Head_2'
              geometry={nodes.Soldier_Head_2.geometry}
              material={materials.Hair_Brown}
              skeleton={nodes.Soldier_Head_2.skeleton}
            />
            <skinnedMesh
              name='Soldier_Head_3'
              geometry={nodes.Soldier_Head_3.geometry}
              material={materials.Brown}
              skeleton={nodes.Soldier_Head_3.skeleton}
            />
          </group>
          <group name='Worker_Head' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Worker_Head_1'
              geometry={nodes.Worker_Head_1.geometry}
              material={materials.Skin}
              skeleton={nodes.Worker_Head_1.skeleton}
            />
            <skinnedMesh
              name='Worker_Head_2'
              geometry={nodes.Worker_Head_2.geometry}
              material={materials.DarkBrown}
              skeleton={nodes.Worker_Head_2.skeleton}
            />
            <skinnedMesh
              name='Worker_Head_3'
              geometry={nodes.Worker_Head_3.geometry}
              material={materials.Brown}
              skeleton={nodes.Worker_Head_3.skeleton}
            />
            <skinnedMesh
              name='Worker_Head_4'
              geometry={nodes.Worker_Head_4.geometry}
              material={materials.Worker_Yellow}
              skeleton={nodes.Worker_Head_4.skeleton}
            />
          </group>
          <group name='Suit_Head' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Suit_Head_1'
              geometry={nodes.Suit_Head_1.geometry}
              material={materials.Skin}
              skeleton={nodes.Suit_Head_1.skeleton}
            />
            <skinnedMesh
              name='Suit_Head_2'
              geometry={nodes.Suit_Head_2.geometry}
              material={materials.Hair_Brown}
              skeleton={nodes.Suit_Head_2.skeleton}
            />
            <skinnedMesh
              name='Suit_Head_3'
              geometry={nodes.Suit_Head_3.geometry}
              material={materials.Brown}
              skeleton={nodes.Suit_Head_3.skeleton}
            />
            <skinnedMesh
              name='Suit_Head_4'
              geometry={nodes.Suit_Head_4.geometry}
              material={materials.Hair_Blond}
              skeleton={nodes.Suit_Head_4.skeleton}
            />
          </group>
          <group name='Adventurer_Head' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Adventurer_Head_1'
              geometry={nodes.Adventurer_Head_1.geometry}
              material={materials.Skin}
              skeleton={nodes.Adventurer_Head_1.skeleton}
            />
            <skinnedMesh
              name='Adventurer_Head_2'
              geometry={nodes.Adventurer_Head_2.geometry}
              material={materials.Hair_Brown}
              skeleton={nodes.Adventurer_Head_2.skeleton}
            />
            <skinnedMesh
              name='Adventurer_Head_3'
              geometry={nodes.Adventurer_Head_3.geometry}
              material={materials.Brown}
              skeleton={nodes.Adventurer_Head_3.skeleton}
            />
          </group>
          <group name='Punk_Head' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Punk_Head_1'
              geometry={nodes.Punk_Head_1.geometry}
              material={materials.Black}
              skeleton={nodes.Punk_Head_1.skeleton}
            />
            <skinnedMesh
              name='Punk_Head_2'
              geometry={nodes.Punk_Head_2.geometry}
              material={materials.Skin}
              skeleton={nodes.Punk_Head_2.skeleton}
            />
            <skinnedMesh
              name='Punk_Head_3'
              geometry={nodes.Punk_Head_3.geometry}
              material={materials.Pink}
              skeleton={nodes.Punk_Head_3.skeleton}
            />
            <skinnedMesh
              name='Punk_Head_4'
              geometry={nodes.Punk_Head_4.geometry}
              material={materials.Hair_Brown}
              skeleton={nodes.Punk_Head_4.skeleton}
            />
            <skinnedMesh
              name='Punk_Head_5'
              geometry={nodes.Punk_Head_5.geometry}
              material={materials.Brown}
              skeleton={nodes.Punk_Head_5.skeleton}
            />
          </group>
          <group name='Formad_Head' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Formad_Head_1'
              geometry={nodes.Formad_Head_1.geometry}
              material={materials.Skin}
              skeleton={nodes.Formad_Head_1.skeleton}
            />
            <skinnedMesh
              name='Formad_Head_2'
              geometry={nodes.Formad_Head_2.geometry}
              material={materials.Red}
              skeleton={nodes.Formad_Head_2.skeleton}
            />
            <skinnedMesh
              name='Formad_Head_3'
              geometry={nodes.Formad_Head_3.geometry}
              material={materials.Brown}
              skeleton={nodes.Formad_Head_3.skeleton}
            />
          </group>
          <group name='SciFi_Head' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='SciFi_Head_1'
              geometry={nodes.SciFi_Head_1.geometry}
              material={materials.Black}
              skeleton={nodes.SciFi_Head_1.skeleton}
            />
            <skinnedMesh
              name='SciFi_Head_2'
              geometry={nodes.SciFi_Head_2.geometry}
              material={materials.Skin}
              skeleton={nodes.SciFi_Head_2.skeleton}
            />
            <skinnedMesh
              name='SciFi_Head_3'
              geometry={nodes.SciFi_Head_3.geometry}
              material={materials.Blue}
              skeleton={nodes.SciFi_Head_3.skeleton}
            />
            <skinnedMesh
              name='SciFi_Head_4'
              geometry={nodes.SciFi_Head_4.geometry}
              material={materials.Brown}
              skeleton={nodes.SciFi_Head_4.skeleton}
            />
            <skinnedMesh
              name='SciFi_Head_5'
              geometry={nodes.SciFi_Head_5.geometry}
              material={materials.Hair_Black}
              skeleton={nodes.SciFi_Head_5.skeleton}
            />
          </group>
          <group name='Medieval_Head' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Medieval_Head_1'
              geometry={nodes.Medieval_Head_1.geometry}
              material={materials.Black}
              skeleton={nodes.Medieval_Head_1.skeleton}
            />
            <skinnedMesh
              name='Medieval_Head_2'
              geometry={nodes.Medieval_Head_2.geometry}
              material={materials.Skin}
              skeleton={nodes.Medieval_Head_2.skeleton}
            />
            <skinnedMesh
              name='Medieval_Head_3'
              geometry={nodes.Medieval_Head_3.geometry}
              material={materials.White}
              skeleton={nodes.Medieval_Head_3.skeleton}
            />
            <skinnedMesh
              name='Medieval_Head_4'
              geometry={nodes.Medieval_Head_4.geometry}
              material={materials.DarkBrown}
              skeleton={nodes.Medieval_Head_4.skeleton}
            />
            <skinnedMesh
              name='Medieval_Head_5'
              geometry={nodes.Medieval_Head_5.geometry}
              material={materials.Brown}
              skeleton={nodes.Medieval_Head_5.skeleton}
            />
          </group>
          <group name='Witch_Head' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Witch_Head_1'
              geometry={nodes.Witch_Head_1.geometry}
              material={materials.Skin}
              skeleton={nodes.Witch_Head_1.skeleton}
            />
            <skinnedMesh
              name='Witch_Head_2'
              geometry={nodes.Witch_Head_2.geometry}
              material={materials.Gold}
              skeleton={nodes.Witch_Head_2.skeleton}
            />
            <skinnedMesh
              name='Witch_Head_3'
              geometry={nodes.Witch_Head_3.geometry}
              material={materials.Purple}
              skeleton={nodes.Witch_Head_3.skeleton}
            />
            <skinnedMesh
              name='Witch_Head_4'
              geometry={nodes.Witch_Head_4.geometry}
              material={materials.Brown}
              skeleton={nodes.Witch_Head_4.skeleton}
            />
            <skinnedMesh
              name='Witch_Head_5'
              geometry={nodes.Witch_Head_5.geometry}
              material={materials.Hair_Black}
              skeleton={nodes.Witch_Head_5.skeleton}
            />
          </group>
          <group name='Worker_Body' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Worker_Body_1'
              geometry={nodes.Worker_Body_1.geometry}
              material={materials.Skin}
              skeleton={nodes.Worker_Body_1.skeleton}
            />
            <skinnedMesh
              name='Worker_Body_2'
              geometry={nodes.Worker_Body_2.geometry}
              material={materials.White}
              skeleton={nodes.Worker_Body_2.skeleton}
            />
            <skinnedMesh
              name='Worker_Body_3'
              geometry={nodes.Worker_Body_3.geometry}
              material={materials.Worker_Yellow}
              skeleton={nodes.Worker_Body_3.skeleton}
            />
            <skinnedMesh
              name='Worker_Body_4'
              geometry={nodes.Worker_Body_4.geometry}
              material={materials.Worker_Vest}
              skeleton={nodes.Worker_Body_4.skeleton}
            />
          </group>
          <group name='Punk_Legs' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Punk_Legs_1'
              geometry={nodes.Punk_Legs_1.geometry}
              material={materials.Black}
              skeleton={nodes.Punk_Legs_1.skeleton}
            />
            <skinnedMesh
              name='Punk_Legs_2'
              geometry={nodes.Punk_Legs_2.geometry}
              material={materials.Skin}
              skeleton={nodes.Punk_Legs_2.skeleton}
            />
          </group>
          <group name='Casual_Head' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Casual_Head_1'
              geometry={nodes.Casual_Head_1.geometry}
              material={materials.Skin}
              skeleton={nodes.Casual_Head_1.skeleton}
            />
            <skinnedMesh
              name='Casual_Head_2'
              geometry={nodes.Casual_Head_2.geometry}
              material={materials.Hair_Brown}
              skeleton={nodes.Casual_Head_2.skeleton}
            />
            <skinnedMesh
              name='Casual_Head_3'
              geometry={nodes.Casual_Head_3.geometry}
              material={materials.Brown}
              skeleton={nodes.Casual_Head_3.skeleton}
            />
            <skinnedMesh
              name='Casual_Head_4'
              geometry={nodes.Casual_Head_4.geometry}
              material={materials.Hair_Blond}
              skeleton={nodes.Casual_Head_4.skeleton}
            />
          </group>
          <group name='Medieval_Feet' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Medieval_Feet_1'
              geometry={nodes.Medieval_Feet_1.geometry}
              material={materials.LightBrown}
              skeleton={nodes.Medieval_Feet_1.skeleton}
            />
            <skinnedMesh
              name='Medieval_Feet_2'
              geometry={nodes.Medieval_Feet_2.geometry}
              material={materials.DarkBrown}
              skeleton={nodes.Medieval_Feet_2.skeleton}
            />
          </group>
          <group name='Soldier_Legs' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Soldier_Legs_1'
              geometry={nodes.Soldier_Legs_1.geometry}
              material={materials.Grey}
              skeleton={nodes.Soldier_Legs_1.skeleton}
            />
            <skinnedMesh
              name='Soldier_Legs_2'
              geometry={nodes.Soldier_Legs_2.geometry}
              material={materials.Black}
              skeleton={nodes.Soldier_Legs_2.skeleton}
            />
            <skinnedMesh
              name='Soldier_Legs_3'
              geometry={nodes.Soldier_Legs_3.geometry}
              material={materials.Swat}
              skeleton={nodes.Soldier_Legs_3.skeleton}
            />
          </group>
          <group name='Suit_Body' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Suit_Body_1'
              geometry={nodes.Suit_Body_1.geometry}
              material={materials.Black}
              skeleton={nodes.Suit_Body_1.skeleton}
            />
            <skinnedMesh
              name='Suit_Body_2'
              geometry={nodes.Suit_Body_2.geometry}
              material={materials.Skin}
              skeleton={nodes.Suit_Body_2.skeleton}
            />
            <skinnedMesh
              name='Suit_Body_3'
              geometry={nodes.Suit_Body_3.geometry}
              material={materials.White}
              skeleton={nodes.Suit_Body_3.skeleton}
            />
          </group>
          <group name='Adventurer_Feet' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Adventurer_Feet_1'
              geometry={nodes.Adventurer_Feet_1.geometry}
              material={materials.Brown_02}
              skeleton={nodes.Adventurer_Feet_1.skeleton}
            />
            <skinnedMesh
              name='Adventurer_Feet_2'
              geometry={nodes.Adventurer_Feet_2.geometry}
              material={materials.Brown2}
              skeleton={nodes.Adventurer_Feet_2.skeleton}
            />
          </group>
          <group name='Formal_Legs' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Formal_Legs_1'
              geometry={nodes.Formal_Legs_1.geometry}
              material={materials.Skin}
              skeleton={nodes.Formal_Legs_1.skeleton}
            />
            <skinnedMesh
              name='Formal_Legs_2'
              geometry={nodes.Formal_Legs_2.geometry}
              material={materials.LimeGreen}
              skeleton={nodes.Formal_Legs_2.skeleton}
            />
          </group>
          <group name='SciFi_Legs' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='SciFi_Legs_1'
              geometry={nodes.SciFi_Legs_1.geometry}
              material={materials.Black}
              skeleton={nodes.SciFi_Legs_1.skeleton}
            />
            <skinnedMesh
              name='SciFi_Legs_2'
              geometry={nodes.SciFi_Legs_2.geometry}
              material={materials.Metal}
              skeleton={nodes.SciFi_Legs_2.skeleton}
            />
            <skinnedMesh
              name='SciFi_Legs_3'
              geometry={nodes.SciFi_Legs_3.geometry}
              material={materials.LightBlue}
              skeleton={nodes.SciFi_Legs_3.skeleton}
            />
          </group>
          <group name='Witch_Legs' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Witch_Legs_1'
              geometry={nodes.Witch_Legs_1.geometry}
              material={materials.Gold}
              skeleton={nodes.Witch_Legs_1.skeleton}
            />
            <skinnedMesh
              name='Witch_Legs_2'
              geometry={nodes.Witch_Legs_2.geometry}
              material={materials.Purple}
              skeleton={nodes.Witch_Legs_2.skeleton}
            />
            <skinnedMesh
              name='Witch_Legs_3'
              geometry={nodes.Witch_Legs_3.geometry}
              material={materials.Brown}
              skeleton={nodes.Witch_Legs_3.skeleton}
            />
          </group>
          <group name='Casual_Feet' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Casual_Feet_1'
              geometry={nodes.Casual_Feet_1.geometry}
              material={materials.Grey}
              skeleton={nodes.Casual_Feet_1.skeleton}
            />
            <skinnedMesh
              name='Casual_Feet_2'
              geometry={nodes.Casual_Feet_2.geometry}
              material={materials.Skin}
              skeleton={nodes.Casual_Feet_2.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/All together.glb')
