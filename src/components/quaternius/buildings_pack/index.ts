import dynamic from 'next/dynamic'

export const Bank = dynamic(() => import('./Bank'), { ssr: false })
export const Flat = dynamic(() => import('./Flat'), { ssr: false })
export const Flat2 = dynamic(() => import('./Flat2'), { ssr: false })
export const Hospital = dynamic(() => import('./Hospital'), { ssr: false })
export const House = dynamic(() => import('./House'), { ssr: false })
export const House2 = dynamic(() => import('./House2'), { ssr: false })
export const House3 = dynamic(() => import('./House3'), { ssr: false })
export const House4 = dynamic(() => import('./House4'), { ssr: false })
export const House5 = dynamic(() => import('./House5'), { ssr: false })
export const Shop = dynamic(() => import('./Shop'), { ssr: false })