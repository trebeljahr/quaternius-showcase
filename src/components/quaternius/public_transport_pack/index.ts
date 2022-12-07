import dynamic from 'next/dynamic'

export const Ambulance = dynamic(() => import('./Ambulance'), { ssr: false })
export const Bicycle = dynamic(() => import('./Bicycle'), { ssr: false })
export const Bus = dynamic(() => import('./Bus'), { ssr: false })
export const SchoolBus = dynamic(() => import('./SchoolBus'), { ssr: false })
export const SquareFrameBicycle = dynamic(() => import('./SquareFrameBicycle'), { ssr: false })
export const Taxi = dynamic(() => import('./Taxi'), { ssr: false })
export const TrafficCone = dynamic(() => import('./TrafficCone'), { ssr: false })
export const TrafficLight = dynamic(() => import('./TrafficLight'), { ssr: false })
export const TrafficSign1 = dynamic(() => import('./TrafficSign1'), { ssr: false })
export const TrafficSign2 = dynamic(() => import('./TrafficSign2'), { ssr: false })
export const TrafficSign3 = dynamic(() => import('./TrafficSign3'), { ssr: false })
export const Train = dynamic(() => import('./Train'), { ssr: false })