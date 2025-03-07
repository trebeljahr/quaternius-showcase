import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    House_Long: THREE.Mesh
  }
  materials: {
    Atlas: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/House_Long-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.House_Long.geometry} material={materials.Atlas} />
    </group>
  )
}

useGLTF.preload('/House_Long-transformed.glb')
