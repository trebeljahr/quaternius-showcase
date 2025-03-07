import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Spaceship_RaeTheRedPanda: THREE.Mesh
  }
  materials: {
    Atlas: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Spaceship_RaeTheRedPanda-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Spaceship_RaeTheRedPanda.geometry} material={materials.Atlas} />
    </group>
  )
}

useGLTF.preload('/Spaceship_RaeTheRedPanda-transformed.glb')
