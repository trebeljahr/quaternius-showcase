import useWindowSize from '@/hooks/useWindowSize'
import { In } from '@/pages/[id]'
import { folder, Leva, useControls } from 'leva'
import { useEffect } from 'react'
import { AnimationAction } from 'three'

export function LevaStyled() {
  const { height, width } = useWindowSize()

  const theme = {
    sizes: { controlWidth: '220px', rootWidth: '320px' },
  }
  return (
    <Leva
      theme={theme}
      titleBar={
        width < 640
          ? {
              position: { y: height - 40 - 95 - 20, x: -width / 2 + 10 + 320 / 2 }, //(width + 320) / 2 - 320 },
            }
          : true
      }
    />
  )
}

const fadeDuration = 0.5

export function GenericAnimationController({ actions }: { actions: Record<string, AnimationAction> }) {
  const actionNames = Object.keys(actions)
  const defaultAction =
    actionNames.find((name) => name.toLowerCase().includes('idle')) ||
    actionNames.find((name) => name.toLowerCase().includes('walk')) ||
    actionNames.find((name) => name.toLowerCase().includes('flying')) ||
    actionNames.find((name) => name.toLowerCase().includes('forward')) ||
    actionNames.find((name) => name.toLowerCase().includes('normal')) ||
    actionNames[0]

  const [{ animation }, set] = useControls(
    () => ({
      animations: folder({
        animation: {
          options: actionNames,
          value: defaultAction,
        },
      }),
    }),
    [defaultAction, actionNames],
  )

  useEffect(() => {
    set({ animation: defaultAction })
  }, [defaultAction, set])

  useEffect(() => {
    actions[animation]?.reset().fadeIn(fadeDuration).play()
    return () => {
      actions[animation]?.fadeOut(fadeDuration)
    }
  }, [animation, actions])

  return (
    <In>
      <LevaStyled />
    </In>
  )
}
