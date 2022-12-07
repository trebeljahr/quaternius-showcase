import * as AllModels from '../../components/quaternius'
import { OrbitControls, Stage } from '@react-three/drei'
import { readdir } from 'fs/promises'
import { GetStaticPropsContext } from 'next'
import { join } from 'path'
import { ComponentType, Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import { GroupProps } from '@react-three/fiber'

export default function Page() {
  const [open, setOpen] = useState(true)
  const toggleOpen = () => {
    setOpen(!open)
  }
  return (
    <>
      <div
        style={{ width: 'fit-content', height: '100vw', overflow: 'hidden', overflowY: 'auto' }}
        className='absolute top-0 left-0 z-20 bg-zinc-900 text-gray-50'>
        <button onClick={toggleOpen}>{open ? '<' : '>'}</button>
        {open &&
          Object.keys(AllModels).map((pack_name) => {
            return (
              <div key={pack_name}>
                <Link href={`/quaternius/${pack_name}`} as={`/quaternius/${pack_name}`}>
                  {pack_name}
                </Link>
              </div>
            )
          })}
      </div>
    </>
  )
}

type Ids = keyof typeof AllModels
// type SelectedPack = typeof AllModels[keyof typeof AllModels]

function CanvasComponent({ id }: { id: Ids }) {
  const [state, setState] = useState(0)
  const [components, setComponents] = useState<ComponentType<GroupProps>[]>([])

  useEffect(() => {
    const selectedPack = AllModels[id]
    setComponents(
      Object.values(selectedPack).map((Component) => {
        return Component
      }),
    )
  }, [id])

  useEffect(() => {
    console.log('Running useEffect')

    setState(0)
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

    // window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }))

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [components.length])

  const Model = components[state]
  return (
    <>
      <Stage intensity={0.5} preset='rembrandt' shadows={true} environment='city'>
        {Model && <Model />}
      </Stage>
      <OrbitControls makeDefault />
      <color attach='background' args={['#f5efe6']} />
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
