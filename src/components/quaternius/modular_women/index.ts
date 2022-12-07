import dynamic from 'next/dynamic'

export const Adventurer = dynamic(() => import('./Adventurer'), { ssr: false })
export const Casual = dynamic(() => import('./Casual'), { ssr: false })
export const Formal = dynamic(() => import('./Formal'), { ssr: false })
export const Medieval = dynamic(() => import('./Medieval'), { ssr: false })
export const Punk = dynamic(() => import('./Punk'), { ssr: false })
export const Rig = dynamic(() => import('./Rig'), { ssr: false })
export const SciFi = dynamic(() => import('./SciFi'), { ssr: false })
export const Soldier = dynamic(() => import('./Soldier'), { ssr: false })
export const Suit = dynamic(() => import('./Suit'), { ssr: false })
export const Witch = dynamic(() => import('./Witch'), { ssr: false })
export const Worker = dynamic(() => import('./Worker'), { ssr: false })
