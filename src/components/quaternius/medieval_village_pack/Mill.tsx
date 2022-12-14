/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Mill_1: THREE.Mesh
    Mill_2: THREE.Mesh
    Mill_3: THREE.Mesh
    Mill_4: THREE.Mesh
    Mill_5: THREE.Mesh
    Mill_6: THREE.Mesh
    Mill_7: THREE.Mesh
    Mill_8: THREE.Mesh
    Mill_9: THREE.Mesh
    Mill_10: THREE.Mesh
    Mill_Blades_1: THREE.Mesh
    Mill_Blades_2: THREE.Mesh
    Mill_Blades_3: THREE.Mesh
    Mill_Blades_4: THREE.Mesh
  }
  materials: {
    RoofTiles: THREE.MeshStandardMaterial
    Stone_Light: THREE.MeshStandardMaterial
    Stone_Dark: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Windows: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
    Wood_Side: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
    Plaster: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/medieval_village_pack/Mill.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0.01, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Mill_1.geometry} material={materials.RoofTiles} />
        <mesh geometry={nodes.Mill_2.geometry} material={materials.Stone_Light} />
        <mesh geometry={nodes.Mill_3.geometry} material={materials.Stone_Dark} />
        <mesh geometry={nodes.Mill_4.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Mill_5.geometry} material={materials.Windows} />
        <mesh geometry={nodes.Mill_6.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.Mill_7.geometry} material={materials.Wood_Side} />
        <mesh geometry={nodes.Mill_8.geometry} material={materials.Green} />
        <mesh geometry={nodes.Mill_9.geometry} material={materials.Plaster} />
        <mesh geometry={nodes.Mill_10.geometry} material={materials.Stone} />
      </group>
      <group position={[0.01, 3.12, 0.87]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Mill_Blades_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Mill_Blades_2.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.Mill_Blades_3.geometry} material={materials.Wood_Side} />
        <mesh geometry={nodes.Mill_Blades_4.geometry} material={materials.Plaster} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/medieval_village_pack/Mill.glb')
