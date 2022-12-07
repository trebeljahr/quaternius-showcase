import dynamic from 'next/dynamic'

export const Apatosaurus = dynamic(() => import('./Apatosaurus'), { ssr: false })
export const Parasaurolophus = dynamic(() => import('./Parasaurolophus'), { ssr: false })
export const Stegosaurus = dynamic(() => import('./Stegosaurus'), { ssr: false })
export const Trex = dynamic(() => import('./Trex'), { ssr: false })
export const Triceratops = dynamic(() => import('./Triceratops'), { ssr: false })
export const Velociraptor = dynamic(() => import('./Velociraptor'), { ssr: false })
