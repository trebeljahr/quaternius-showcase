import { useEffect, useLayoutEffect, useState } from 'react'
export interface Size {
  width: number | undefined
  height: number | undefined
}

export function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    width: 1200,
    height: 1200,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
