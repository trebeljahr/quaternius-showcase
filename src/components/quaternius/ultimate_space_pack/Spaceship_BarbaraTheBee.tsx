import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Spaceship_BarbaraTheBee: THREE.Mesh
  }
  materials: {
    Atlas: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Spaceship_BarbaraTheBee-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Spaceship_BarbaraTheBee.geometry} material={materials.Atlas} />
    </group>
  )
}

useGLTF.preload('/Spaceship_BarbaraTheBee-transformed.glb')
