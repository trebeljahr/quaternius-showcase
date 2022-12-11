import { usePrevious } from '@/hooks/usePrevious'
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

export function GenericAnimationController({ actions }: { actions: Record<string, AnimationAction> }) {
  const { animation } = useControls({ animations: folder({ animation: { options: actions } }) })
  const previousAnimation = usePrevious(animation)

  useEffect(() => {
    const fadeDuration = 0.5
    previousAnimation?.fadeOut(fadeDuration)
    animation?.reset().fadeIn(fadeDuration).play()
  }, [previousAnimation, animation])

  return (
    <In>
      <LevaStyled />
    </In>
  )
}
