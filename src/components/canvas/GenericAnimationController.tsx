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
          
        },
      }),
    }),
    [defaultAction, actionNames],
  )

  useEffect(() => {
    set({ animation: defaultAction })
  }, [defaultAction, set])

  useEffect(() => {
    console.log('Running cleanup to stop all')
    Object.values(actions)[0]?.getMixer().stopAllAction()
    Object.values(actions).forEach((anim) =>
      // @ts-ignore: next-line
      console.log(anim._clip.name, 'time:', anim.time, 'paused:', anim.paused, anim.weight),
    )
    return () => {
      Object.values(actions)[0]?.getMixer().stopAllAction()
    }
  }, [actions])

  useEffect(() => {
    console.log(animation)
    console.log(actions[animation])

    if (!actions[animation]) return () => {}

    Object.values(actions).forEach((anim) =>
      // @ts-ignore: next-line
      console.log(anim._clip.name, 'time:', anim.time, 'paused:', anim.paused, anim.weight),
    )
    Object.values(actions)[0].getMixer().stopAllAction()

    // console.log(Object.values(actions).forEach((action) => console.log(action.time)))
    actions[animation]?.reset().fadeIn(fadeDuration).play()
    return () => {
      console.log('==== cleanup ====')
      console.log(actions)
      console.log(animation)

      actions[animation]?.stop()
    }
  }, [animation, actions])

  return (
    <In>
      <LevaStyled />
    </In>
  )
}
