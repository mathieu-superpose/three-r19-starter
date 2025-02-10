import { useMemo } from "react"
import * as THREE from "three"
import { shaderMaterial } from "@react-three/drei"
import { extend, useFrame } from "@react-three/fiber"

import fragment from "../shaders/crown/fragment.glsl"
import vertex from "../shaders/crown/vertex.glsl"

const CrownMaterial = shaderMaterial(
  { uTime: 0, uColor: new THREE.Color("black") },
  vertex,
  fragment
)

extend({ CrownMaterial })

function Crown() {
  const material = useMemo(() => {
    const mat = new CrownMaterial()
    mat.uniforms.uColor.value = new THREE.Color("yellow")
    return mat
  }, [])

  useFrame(({ clock }) => {
    material.uniforms.uTime.value = clock.getElapsedTime()
  })

  return (
    <group>
      <mesh rotation={[Math.PI / 2, 0, 0]} material={material}>
        <torusGeometry args={[1, 0.2, 16, 100]} />
      </mesh>
    </group>
  )
}

export default Crown
