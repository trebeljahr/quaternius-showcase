import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Sky } from '@react-three/drei'

export default function Scene({ children, ...props }) {
  return (
    <Canvas {...props}>
      <Sky azimuth={1} inclination={0.6} distance={1000} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {children}
      <Preload all />
      <OrbitControls />
    </Canvas>
  )
}
