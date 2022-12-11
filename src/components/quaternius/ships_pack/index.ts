import dynamic from 'next/dynamic'

export const BoatWSail = dynamic(() => import('./BoatWSail'), { ssr: false })
export const CruiseShip = dynamic(() => import('./CruiseShip'), { ssr: false })
export const Lifeboat = dynamic(() => import('./Lifeboat'), { ssr: false })
export const Sail_Ship = dynamic(() => import('./Sail_Ship'), { ssr: false })
export const Viking_Boat = dynamic(() => import('./Viking_Boat'), { ssr: false })
