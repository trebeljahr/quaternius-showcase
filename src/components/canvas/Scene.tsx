import { Canvas } from '@react-three/fiber'
import { KeyboardControls, PointerLockControls, Preload, Sky } from '@react-three/drei'
import { Player } from './Player'
import { Physics } from '@react-three/rapier'

export default function Scene({ children, ...props }) {
  return (
    <KeyboardControls
      map={[
        { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
        { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
        { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
        { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
        { name: 'jump', keys: ['Space'] },
        { name: 'descend', keys: ['c', 'C', 'Shift'] },
      ]}>
      <Canvas {...props}>
        <Sky azimuth={1} inclination={0.6} distance={1000} />
        <ambientLight />
        <Physics>
          <Player />
        </Physics>
        <pointLight position={[10, 10, 10]} />
        {children}
        <Preload all />
        <PointerLockControls />
      </Canvas>
    </KeyboardControls>
  )
}
