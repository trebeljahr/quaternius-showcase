import * as AllModels from '../components/quaternius'
import { OrbitControls, Stage } from '@react-three/drei'
import { readdir } from 'fs/promises'
import { GetStaticPropsContext } from 'next'
import { join } from 'path'
import { ComponentType, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { GroupProps } from '@react-three/fiber'
import { capital } from 'case'

const activeSide =
  'z-20 font-leva text-sm	w-60 bg-leva-dark h-screen  transform transition-all fixed duration-700 text-leva-white p-2'
const hiddenSide =
  'z-20 font-leva text-sm w-60 bg-leva-dark h-screen  transform transition-all fixed duration-700 text-leva-white p-2 -translate-x-60'
const activeButton =
  'z-20 font-leva text-sm	absolute w-10 h-10 bg-yellow-400 top-0 cursor-pointer transition-all transform duration-700 flex items-center justify-center'
const normalButton =
  'z-20 font-leva text-sm	absolute w-10 h-10 bg-yellow-400 top-0 cursor-pointer transition-all transform duration-700 flex items-center justify-center translate-x-60'

const navButton = 'z-20 font-leva text-sm w-10 h-10 bg-leva-dark text-leva-white cursor-pointer'

import tunnel from 'tunnel-rat'
const t = tunnel()
export const { Out, In } = t

export default function Page() {
  const [open, setOpen] = useState(true)
  const toggleOpen = () => {
    setOpen(!open)
  }
  return (
    <>
      <Out />
      <button className={open ? normalButton : activeButton} onClick={toggleOpen}>
        {open ? '<' : '>'}
      </button>
      <div
        style={{ height: '100vw', overflow: 'hidden', overflowY: 'auto' }}
        className={open ? activeSide : hiddenSide}>
        {open &&
          Object.keys(AllModels).map((name) => {
            const pack_name = capital(name)
            return (
              <div key={pack_name}>
                <Link href={`/${name}`} as={`/${name}`}>
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

  const gotoPrev = useCallback(() => {
    setState((old) => {
      const next = old - 1
      if (next < 0) return components.length - 1
      return next
    })
  }, [components.length])

  const gotoNext = useCallback(() => {
    setState((old) => {
      const next = old + 1
      if (next >= components.length) return 0
      return next
    })
  }, [components.length])

  useEffect(() => {
    setState(0)
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowRight') {
        gotoNext()
      } else if (event.key === 'ArrowLeft') {
        gotoPrev()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [components.length, gotoNext, gotoPrev])

  useEffect(() => {
    components.forEach((component) => {
      // @ts-ignore: next-line
      component.render.preload()
    })
  }, [components])

  const Model = components[state]
  return (
    <>
      <In>
        <div className='absolute bottom-0 right-0 z-20'>
          <button className={navButton} onClick={gotoPrev}>
            {'<'}
          </button>
          <button className={navButton} onClick={gotoNext}>
            {'>'}
          </button>
        </div>
      </In>
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
  return { props: { id } }
}
