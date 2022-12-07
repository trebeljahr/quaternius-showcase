import dynamic from 'next/dynamic'

export const Adventurer = dynamic(() => import('./Adventurer'), { ssr: false })
export const Beach = dynamic(() => import('./Beach'), { ssr: false })
export const Casual = dynamic(() => import('./Casual'), { ssr: false })
export const Casual2 = dynamic(() => import('./Casual2'), { ssr: false })
export const Farmer = dynamic(() => import('./Farmer'), { ssr: false })
export const Humans_Master = dynamic(() => import('./Humans_Master'), { ssr: false })
export const King = dynamic(() => import('./King'), { ssr: false })
export const Punk = dynamic(() => import('./Punk'), { ssr: false })
export const Spacesuit = dynamic(() => import('./Spacesuit'), { ssr: false })
export const Suit = dynamic(() => import('./Suit'), { ssr: false })
export const Swat = dynamic(() => import('./Swat'), { ssr: false })
export const Worker = dynamic(() => import('./Worker'), { ssr: false })