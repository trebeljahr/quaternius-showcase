import dynamic from 'next/dynamic'

export const Dolphin = dynamic(() => import('./Dolphin'), { ssr: false })
export const Fish1 = dynamic(() => import('./Fish1'), { ssr: false })
export const Fish2 = dynamic(() => import('./Fish2'), { ssr: false })
export const Fish3 = dynamic(() => import('./Fish3'), { ssr: false })
export const Ray = dynamic(() => import('./Ray'), { ssr: false })
export const Shark = dynamic(() => import('./Shark'), { ssr: false })
export const Whale = dynamic(() => import('./Whale'), { ssr: false })
