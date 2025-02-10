import { OrbitControls, PerspectiveCamera } from "@react-three/drei"

function Environment() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls />
    </>
  )
}

export default Environment
