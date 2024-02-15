import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Perf } from "r3f-perf"
import { Center, OrbitControls, Stage } from '@react-three/drei'
import { Bag } from './Bag'
import { Leva, useControls } from "leva"
import { Download } from './Download'


export const Experience = () => {
  const cameraProps = { fov: 75, near: 1, far: 100, position: [-2, 0, 5] }
  return (
    <>

      <Canvas gl={{ preserveDrawingBuffer: true }} dpr={[1, 2]} camera={ cameraProps } shadows={false} >
          {/* <Perf position="top-left" /> */}
          <ambientLight/>
          <OrbitControls/>

          <Download/>

          <Stage environment="city" intensity={0.6}>
            <Center>
              <Bag />
            </Center>
          </Stage>
      </Canvas>
    </>
  )
}
