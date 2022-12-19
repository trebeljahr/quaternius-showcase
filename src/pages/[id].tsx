import * as AllModels from '../components/quaternius'
import { OrbitControls, Sky, Stage } from '@react-three/drei'
import { readdir } from 'fs/promises'
import { GetStaticPropsContext } from 'next'
import { join } from 'path'
import { ComponentType, useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { GroupProps, useFrame } from '@react-three/fiber'
import { capital } from 'case'
import tunnel from 'tunnel-rat'
import { useWindowSize } from '@/hooks/useWindowSize'
import { Group } from 'three'
import { DownloadIcon } from '@/components/dom/DownloadIcon'

const sideStyle =
  'z-[1500] overflow-x-hidden overflow-y-auto font-leva text-sm	w-60 bg-leva-dark h-screen  transform transition-all fixed duration-700 text-leva-white p-2'

const downloadStyles = 'absolute left-0 z-20 flex justify-center transition-all transform duration-700 bottom-1'

const buttonStyle =
  'z-[1500] font-leva text-sm	absolute w-10 h-10 bg-yellow-400 hover:w-11 hover:h-11 top-0 cursor-pointer transition-all transform duration-700 flex items-center justify-center'

const navButton =
  'z-[1500] font-leva text-sm w-10 h-10 bg-leva-dark text-leva-white cursor-pointer hover:bg-leva-medium'

const t = tunnel()
export const { Out, In } = t

export default function Page() {
  return <Out />
}

type Ids = keyof typeof AllModels

function CanvasComponent({ id }: { id: Ids }) {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)

  const [components, setComponents] = useState<{ Component: ComponentType<GroupProps>; key: string }[]>([])
  const { width } = useWindowSize()

  const modelRef = useRef<Group>()
  const stopped = useRef(false)

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

  useEffect(() => {
    const selectedPack = AllModels[id]
    setComponents(
      Object.entries(selectedPack).map(([key, Component]) => {
        return { key, Component }
      }),
    )
  }, [id])

  const gotoPrev = useCallback(() => {
    setIndex((old) => {
      const next = old - 1
      if (next < 0) return components.length - 1
      return next
    })
  }, [components.length])

  const gotoNext = useCallback(() => {
    setIndex((old) => {
      const next = old + 1
      if (next >= components.length) return 0
      return next
    })
  }, [components.length])

  useEffect(() => {
    setIndex(0)
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowRight') {
        gotoNext()
      } else if (event.key === 'ArrowLeft') {
        gotoPrev()
      } else if (event.key === ' ') {
        stopped.current = !stopped.current
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [components.length, gotoNext, gotoPrev, stopped])

  useEffect(() => {
    components.forEach(({ Component }) =>
      (Component as typeof Component & { render: { preload(): void } }).render.preload(),
    )
  }, [components])

  const Model = components[index]

  useFrame((_, delta) => {
    if (modelRef.current?.rotation && !stopped.current) {
      modelRef.current.rotation.y -= delta * 0.2
    }
  })

  return (
    <>
      <In>
        {Model && (
          <a className={`${downloadStyles} ${open && 'translate-x-60'}`} href={`/glb/${id}/${Model.key}.glb`} download>
            <span>
              <DownloadIcon />
              {'.glb'}
            </span>
          </a>
        )}
        <div className='absolute bottom-0 right-0 z-20'>
          <button className={navButton} onClick={gotoPrev}>
            {'<'}
          </button>
          <button className={navButton} onClick={gotoNext}>
            {'>'}
          </button>
        </div>

        <button id='close-btn' className={`${buttonStyle} ${open && 'translate-x-60'}`} onClick={toggleOpen}>
          {open ? '<' : '>'}
        </button>
        <div className={`${sideStyle} ${!open && '-translate-x-60'}`}>
          {open && (
            <div className='relative h-full min-h-[750px]'>
              <h1 className='pt-2 mb-2 text-lg'>
                <a
                  className='text-leva-light-grey hover:underline hover:decoration-solid'
                  href={'https://quaternius.com/'}>
                  Free 3D Models by <span>@Quaternius</span>
                </a>
              </h1>

              <div>
                {Object.keys(AllModels).map((name) => {
                  const pack_name = capital(name)
                  return (
                    <div
                      key={pack_name}
                      className={`hover:text-leva-light-grey hover:underline hover:decoration-solid ${
                        id === name && 'underline decoration-solid'
                      }`}>
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
                    Built with <span style={{ color: ' #F35269' }}>♥</span> by Rico
                  </a>
                </div>
              </footer>
            </div>
          )}
        </div>
      </In>
      <Stage intensity={0.5} preset='rembrandt' shadows={true} environment='city'>
        {Model && (
          <group ref={modelRef}>
            <Model.Component />
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
