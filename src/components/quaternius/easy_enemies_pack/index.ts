import dynamic from 'next/dynamic'

export const Frog = dynamic(() => import('./Frog'), { ssr: false })
export const Rat = dynamic(() => import('./Rat'), { ssr: false })
export const Snake = dynamic(() => import('./Snake'), { ssr: false })
export const Snake_angry = dynamic(() => import('./Snake_angry'), { ssr: false })
export const Spider = dynamic(() => import('./Spider'), { ssr: false })
export const Wasp = dynamic(() => import('./Wasp'), { ssr: false })