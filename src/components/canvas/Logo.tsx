import * as THREE from 'three'
import { useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { Material, Mesh } from 'three'
import Grass from './Grass'

function BirchTree() {
  const result = useGLTF('/BirchTree_5.gltf')
  const { nodes, scene, materials } = result

  console.log(result, nodes, scene, materials)

  console.log(nodes.BirchTree_5.children[0])

  return (
    <>
      <mesh geometry={(nodes.BirchTree_5.children[0] as Mesh).geometry}>
        <meshStandardMaterial color='#ff0000' />
      </mesh>
      <Grass />
    </>

    /* <mesh material={materials.BirchTree_Leaves} geometry={(nodes.BirchTree_5.children[1] as Mesh).geometry} /> */
  )
  // return <primitive object={nodes.BirchTree_5.children[0]} />
}

// function TreeTrunk() {
//   const { nodes, materials } = useGLTF('/BirchTree_5.gltf', true)
//   console.log(nodes, materials)

//   return <mesh material={materials.BirchTree_Bark} geometry={(nodes. as Mesh).geometry} />
// }

export default function Logo() {
  // TreeTrunk()

  return <BirchTree />
}
