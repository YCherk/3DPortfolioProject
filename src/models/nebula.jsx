import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'


const Nebula = ({ ...props }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/8v83sXN1uw5e-m8h/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#000000']} />
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <pointLight
            name="Point Light"
            castShadow
            intensity={2.73}
            distance={50000}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={100}
            shadow-camera-far={100000}
          />
          <particleSystem
            name="Particle Emitter 10"
            geometry={nodes['Particle Emitter 10'].geometry}
            material={materials['']}
            rotation={[0, 0, 0.26]}
            scale={1}
          />
          <particleSystem
            name="Particle Emitter 6"
            geometry={nodes['Particle Emitter 6'].geometry}
            material={materials['']}
            rotation={[-1.48, -1.43, -0.82]}
            scale={1}
          />
          <particleSystem
            name="Particle Emitter 9"
            geometry={nodes['Particle Emitter 9'].geometry}
            material={materials['']}
            rotation={[-1.38, 1.15, -1.75]}
            scale={1}
          />
          <particleSystem
            name="Particle Emitter 7"
            geometry={nodes['Particle Emitter 7'].geometry}
            material={materials['']}
            rotation={[-1.38, 1.15, -1.75]}
            scale={1}
          />
          <particleSystem
            name="Particle Emitter 8"
            geometry={nodes['Particle Emitter 8'].geometry}
            material={materials['']}
            rotation={[-1.38, 1.15, -1.75]}
            scale={1}
          />
          <particleSystem
            name="Particle Emitter 5"
            geometry={nodes['Particle Emitter 5'].geometry}
            material={materials['']}
            rotation={[-1.38, 1.15, -1.75]}
            scale={1}
          />
          <particleSystem
            name="Particle Emitter 4"
            geometry={nodes['Particle Emitter 4'].geometry}
            material={materials['']}
            rotation={[Math.PI / 4, Math.PI / 4, Math.PI / 4]}
            scale={1}
          />
          <particleSystem
            name="Particle Emitter 3"
            geometry={nodes['Particle Emitter 3'].geometry}
            material={materials['']}
            rotation={[-Math.PI / 4, -Math.PI / 4, -Math.PI / 4]}
            scale={1}
          />
          <particleSystem
            name="Particle Emitter Base"
            geometry={nodes['Particle Emitter Base'].geometry}
            material={materials['']}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <particleSystem
            name="Particle Emitter 2"
            geometry={nodes['Particle Emitter 2'].geometry}
            material={materials['']}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <particleSystem
            name="Particle Emitter"
            geometry={nodes['Particle Emitter'].geometry}
            material={materials['']}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <OrthographicCamera name="1" makeDefault={true} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
    </>
  )
}
export default Nebula;
