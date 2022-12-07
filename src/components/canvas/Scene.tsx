import { Canvas } from '@react-three/fiber'
import { KeyboardControls, Preload, Sky } from '@react-three/drei'

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
        { name: 'attack', keys: ['F', 'f'] },
      ]}>
      <Canvas {...props}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {children}
        <Preload all />
      </Canvas>
    </KeyboardControls>
  )
}
