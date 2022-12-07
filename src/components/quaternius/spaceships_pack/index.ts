import dynamic from 'next/dynamic'

export const Bob = dynamic(() => import('./Bob'), { ssr: false })
export const Challenger = dynamic(() => import('./Challenger'), { ssr: false })
export const Dispatcher = dynamic(() => import('./Dispatcher'), { ssr: false })
export const Executioner = dynamic(() => import('./Executioner'), { ssr: false })
export const Imperial = dynamic(() => import('./Imperial'), { ssr: false })
export const Insurgent = dynamic(() => import('./Insurgent'), { ssr: false })
export const Omen = dynamic(() => import('./Omen'), { ssr: false })
export const Pancake = dynamic(() => import('./Pancake'), { ssr: false })
export const Spitfire = dynamic(() => import('./Spitfire'), { ssr: false })
export const Striker = dynamic(() => import('./Striker'), { ssr: false })
export const Zenith = dynamic(() => import('./Zenith'), { ssr: false })
