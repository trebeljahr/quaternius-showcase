import dynamic from 'next/dynamic'

export const Boat = dynamic(() => import('./Viking_Boat'), { ssr: false })
export const BoatWSail = dynamic(() => import('./BoatWSail'), { ssr: false })
export const CruiseShip = dynamic(() => import('./CruiseShip'), { ssr: false })
export const Lifeboat = dynamic(() => import('./Lifeboat'), { ssr: false })
export const Ship = dynamic(() => import('./Sail_Ship'), { ssr: false })
