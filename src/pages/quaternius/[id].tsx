import * as AllModels from '../../components/quaternius'
import { OrbitControls, Stage } from '@react-three/drei'
import { readdir } from 'fs/promises'
import { GetStaticPropsContext } from 'next'
import { join } from 'path'
import { useEffect, useState } from 'react'

export default function Page() {
  return <></>
}

type Ids = keyof typeof AllModels
// type SelectedPack = typeof AllModels[keyof typeof AllModels]

function CanvasComponent(props: { id: Ids }) {
  const [state, setState] = useState(0)
  const { id } = props
  const selectedPack = AllModels[id]

  const components = Object.values(selectedPack).map((Component) => {
    return Component
  })

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowRight') {
        setState((old) => {
          const next = old + 1
          if (next >= components.length) return 0
          return next
        })
      } else if (event.key === 'ArrowLeft') {
        setState((old) => {
          const next = old - 1
          if (next < 0) return components.length - 1
          return next
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [components.length])

  const Model = components[state]
  return (
    <>
      <Stage
        intensity={0.5}
        preset='rembrandt'
        // @ts-ignore: next-line
        shadows={{ type: 'accumulative', color: 'skyblue', colorBlend: 2, opacity: 2 }}
        // @ts-ignore: next-line
        adjustCamera={1.75}
        environment='city'>
        <Model />
      </Stage>
      <OrbitControls makeDefault />
    </>
  )
}

Page.canvas = (props: { id: Ids }) => {
  return <CanvasComponent {...props} />
}

export async function getStaticPaths() {
  const available = (await readdir(join(process.cwd(), 'src', 'components', 'quaternius'))).filter(
    (name) => name !== 'index.ts',
  )

  return {
    paths: available.map((name) => ({
      params: {
        id: name,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { id } }: GetStaticPropsContext<{ id: Ids }>) => {
  console.log(id)

  return { props: { id } }
}
