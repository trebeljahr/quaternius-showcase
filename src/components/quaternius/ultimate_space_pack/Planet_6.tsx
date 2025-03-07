import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Planet_6: THREE.Mesh
  }
  materials: {
    Atlas: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Planet_6-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Planet_6.geometry} material={materials.Atlas} />
    </group>
  )
}

useGLTF.preload('/Planet_6-transformed.glb')
