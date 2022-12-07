import dynamic from 'next/dynamic'

export const Alpaca = dynamic(() => import('./Alpaca'), { ssr: false })
export const Bull = dynamic(() => import('./Bull'), { ssr: false })
export const Cow = dynamic(() => import('./Cow'), { ssr: false })
export const Deer = dynamic(() => import('./Deer'), { ssr: false })
export const Donkey = dynamic(() => import('./Donkey'), { ssr: false })
export const Fox = dynamic(() => import('./Fox'), { ssr: false })
export const Horse = dynamic(() => import('./Horse'), { ssr: false })
export const Horse_White = dynamic(() => import('./Horse_White'), { ssr: false })
export const Husky = dynamic(() => import('./Husky'), { ssr: false })
export const ShibaInu = dynamic(() => import('./ShibaInu'), { ssr: false })
export const Stag = dynamic(() => import('./Stag'), { ssr: false })
export const Wolf = dynamic(() => import('./Wolf'), { ssr: false })
