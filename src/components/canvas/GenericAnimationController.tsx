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
          //   onChange: (animation) => {
          //     actions[animation]?.reset().fadeIn(fadeDuration).play()
          //   },
        },
      }),
    }),
    [defaultAction, actionNames],
  )

  useEffect(() => {
    // console.log(defaultAction)
    set({ animation: defaultAction })
  }, [defaultAction, set])
  //   const previousAnimation = usePrevious(animation)

  useEffect(() => {
    console.log('Running cleanup to stop all')
    Object.values(actions)[0]?.stop().getMixer().stopAllAction()

    return () => {
      Object.values(actions)[0]?.stop().getMixer().stopAllAction()
    }
  }, [])

  useEffect(() => {
    console.log(animation)
    console.log(actions[animation])

    console.log(Object.values(actions).forEach((action) => console.log(action.time)))
    actions[animation]?.reset().fadeIn(fadeDuration).play()
    return () => {
      actions[animation]?.stop().fadeOut(fadeDuration)
    }
  }, [animation, actions])

  return (
    <In>
      <LevaStyled />
    </In>
  )
}
