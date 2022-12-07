import dynamic from 'next/dynamic'

export const George = dynamic(() => import('./George'), { ssr: false })
export const Leela = dynamic(() => import('./Leela'), { ssr: false })
export const Mike = dynamic(() => import('./Mike'), { ssr: false })
export const Stan = dynamic(() => import('./Stan'), { ssr: false })