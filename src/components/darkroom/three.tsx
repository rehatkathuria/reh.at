import { OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { EffectComposer, Noise } from "@react-three/postprocessing"
import { Theme } from "@themes/index"
import { randomInt } from "@utilities/math"
import { useTheme } from "styled-components"
import { useRef } from "react"
import { Canvas } from "./styles"

export const SilverHalide = () => {
	const theme = useTheme() as Theme

	const globe = () => {
		return (
			<>
				{/* <mesh position={[0, 0, 0]}>
					<sphereGeometry args={[0.75, 20, 20]} />
					<meshStandardMaterial color={theme.text} />
				</mesh> */}
				<mesh>
					<dodecahedronGeometry args={[2.75, 1]} />
					<meshStandardMaterial color={"red"} />
				</mesh>
			</>
		)
	}

	return (
		<>
			<Canvas>
				<ambientLight />
				{globe()}
				<spotLight
					castShadow={false}
					position={[0, 100, 50]}
					penumbra={2}
					distance={200}
					angle={1}
					intensity={2}
				/>
				<EffectComposer>
					<Noise opacity={1.0} />
				</EffectComposer>
				<OrbitControls
					screenSpacePanning
					enableZoom={false}
					enableDamping
					autoRotate
					autoRotateSpeed={1.5}
				/>
			</Canvas>
		</>
	)
}
