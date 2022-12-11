import { In } from '@/pages/quaternius/[id]'
import { folder, Leva, useControls } from 'leva'
import { useEffect } from 'react'
import { AnimationAction } from 'three'

export function LevaStyled() {
  const theme = {
    sizes: { controlWidth: '250px', rootWidth: '400px' },
  }
  return <Leva theme={theme} />
}

const fadeDuration = 0.5

export function GenericAnimationController({ actions }: { actions: Record<string, AnimationAction> }) {
  const actionNames = Object.keys(actions)
  const defaultAction = actionNames.find((name) => name.toLowerCase().includes('idle')) || actionNames[0]

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
