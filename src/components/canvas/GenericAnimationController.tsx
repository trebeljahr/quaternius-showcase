import { usePrevious } from '@/hooks/usePrevious'
import { In } from '@/pages/quaternius/[id]'
import { folder, Leva, useControls } from 'leva'
import { useEffect, useState } from 'react'
import { AnimationAction } from 'three'

export function LevaStyled() {
  const theme = {
    sizes: { controlWidth: '250px', rootWidth: '400px' },
  }
  return <Leva theme={theme} />
}

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
    console.log(defaultAction)
    set({ animation: defaultAction })
  }, [defaultAction, set])
  //   const previousAnimation = usePrevious(animation)

  useEffect(() => {
    console.log(animation)
    const fadeDuration = 0.5
    actions[animation]?.reset().fadeIn(fadeDuration).play()
    return () => {
      actions[animation]?.fadeOut(fadeDuration).stop()
    }
  }, [animation, actions])

  return (
    <In>
      <LevaStyled />
    </In>
  )
}
