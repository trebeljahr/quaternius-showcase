import dynamic from 'next/dynamic'

export const Club = dynamic(() => import('./Club'), { ssr: false })
export const Helmet1 = dynamic(() => import('./Helmet1'), { ssr: false })
export const Helmet2 = dynamic(() => import('./Helmet2'), { ssr: false })
export const Helmet3 = dynamic(() => import('./Helmet3'), { ssr: false })
export const Katana = dynamic(() => import('./Katana'), { ssr: false })
export const KnightCharacter = dynamic(() => import('./KnightCharacter'), { ssr: false })
export const ShortSword = dynamic(() => import('./ShortSword'), { ssr: false })
export const ShoulderPads = dynamic(() => import('./ShoulderPads'), { ssr: false })
export const Sword = dynamic(() => import('./Sword'), { ssr: false })
