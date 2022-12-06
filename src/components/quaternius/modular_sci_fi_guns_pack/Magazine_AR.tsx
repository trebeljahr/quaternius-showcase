/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Magazine_AR: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Magazine_AR.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Magazine_AR.geometry}
        material={materials.Black}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/Magazine_AR.glb')
