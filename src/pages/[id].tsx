import * as AllModels from '../components/quaternius'
import { OrbitControls, Sky, Stage } from '@react-three/drei'
import { readdir } from 'fs/promises'
import { GetStaticPropsContext } from 'next'
import { join } from 'path'
import { ComponentType, useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { GroupProps, useFrame } from '@react-three/fiber'
import { capital } from 'case'

const activeSide =
  'z-[1500] font-leva text-sm	w-60 bg-leva-dark h-screen  transform transition-all fixed duration-700 text-leva-white p-2'
const hiddenSide =
  'z-[1500] font-leva text-sm w-60 bg-leva-dark h-screen  transform transition-all fixed duration-700 text-leva-white p-2 -translate-x-60'
const activeButton =
  'z-[1500] font-leva text-sm	absolute w-10 h-10 bg-yellow-400 hover:w-11 hover:h-11 top-0 cursor-pointer transition-all transform duration-700 flex items-center justify-center'
const normalButton =
  'z-[1500] font-leva text-sm	absolute w-10 h-10 bg-yellow-400 hover:w-11 hover:h-11 top-0 cursor-pointer transition-all transform duration-700 flex items-center justify-center translate-x-60'

const navButton =
  'z-[1500] font-leva text-sm w-10 h-10 bg-leva-dark text-leva-white cursor-pointer hover:bg-leva-medium'

import tunnel from 'tunnel-rat'
import { useWindowSize } from '@/hooks/useWindowSize'
import { Group } from 'three'

const t = tunnel()
export const { Out, In } = t

export default function Page({ id }: { id: string }) {
  const [open, setOpen] = useState(false)
  const { width } = useWindowSize()
  const toggleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const closePopup = (event: PointerEvent) => {
      if (width < 640 && event.x > 240 && (event.target as HTMLElement).id !== 'close-btn') {
        setOpen(false)
      }
    }
    window.addEventListener('pointerdown', closePopup)
    return () => {
      window.removeEventListener('pointerdown', closePopup)
    }
  }, [width])

  return (
    <>
      <Out />
      <button id='close-btn' className={open ? normalButton : activeButton} onClick={toggleOpen}>
        {open ? '<' : '>'}
      </button>
      <div id='' style={{ overflow: 'hidden', overflowY: 'auto' }} className={open ? activeSide : hiddenSide}>
        {open && (
          <div className='relative h-full'>
            <h1 className='pt-2 mb-2 text-lg'>
              <a className='text-leva-light-grey' href={'https://quaternius.com/'}>
                Free 3D Models by <span>@Quaternius</span>
              </a>
            </h1>

            <div>
              {Object.keys(AllModels).map((name) => {
                const pack_name = capital(name)
                return (
                  <div key={pack_name} className={id === name ? 'underline decoration-solid' : ''}>
                    <Link href={`/${name}`} as={`/${name}`}>
                      {pack_name}
                    </Link>
                  </div>
                )
              })}
            </div>
            <footer className='absolute bottom-0 left-0 z-30 text-leva-light-grey'>
              <div>
                <a href={'https://trebeljahr.com'}>
                  Made with <span style={{ color: ' #F35269' }}>♥</span> by Rico
                </a>
              </div>
            </footer>
          </div>
        )}
      </div>
    </>
  )
}

type Ids = keyof typeof AllModels
// type SelectedPack = typeof AllModels[keyof typeof AllModels]

function CanvasComponent({ id }: { id: Ids }) {
  const [state, setState] = useState(0)
  const [components, setComponents] = useState<ComponentType<GroupProps>[]>([])
  const modelRef = useRef<Group>()
  const [stopped, setStopped] = useState(false)

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
      console.log(event.key)
      if (event.key === 'ArrowRight') {
        gotoNext()
      } else if (event.key === 'ArrowLeft') {
        gotoPrev()
      } else if (event.key === ' ') {
        setStopped((old) => !old)
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

  useFrame((_, delta) => {
    if (modelRef.current?.rotation && !stopped) {
      modelRef.current.rotation.y -= delta * 0.2
    }
  })

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
        {Model && (
          <group ref={modelRef}>
            <Model />
          </group>
        )}
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
