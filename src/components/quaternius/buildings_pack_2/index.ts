import dynamic from 'next/dynamic'

export const Building1_Large = dynamic(() => import('./Building1_Large'), { ssr: false })
export const Building1_Small = dynamic(() => import('./Building1_Small'), { ssr: false })
export const Building2_Large = dynamic(() => import('./Building2_Large'), { ssr: false })
export const Building2_Small = dynamic(() => import('./Building2_Small'), { ssr: false })
export const Building3_Big = dynamic(() => import('./Building3_Big'), { ssr: false })
export const Building3_Small = dynamic(() => import('./Building3_Small'), { ssr: false })
export const Building4 = dynamic(() => import('./Building4'), { ssr: false })
export const House1 = dynamic(() => import('./House1'), { ssr: false })
export const House2 = dynamic(() => import('./House2'), { ssr: false })