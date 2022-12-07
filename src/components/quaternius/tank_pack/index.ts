import dynamic from 'next/dynamic'

export const Tank = dynamic(() => import('./Tank'), { ssr: false })
export const Tank2 = dynamic(() => import('./Tank2'), { ssr: false })
export const Tank3 = dynamic(() => import('./Tank3'), { ssr: false })
export const Tank4 = dynamic(() => import('./Tank4'), { ssr: false })
