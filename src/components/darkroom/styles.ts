import { grain } from "@components/grain"
import styled, { keyframes } from "styled-components"
import { ContentContainer } from "@components/index/styles"
import { Canvas as ThreeCanvas } from "@react-three/fiber"

export const Canvas = styled(ThreeCanvas)`
	background: clear;
	max-height: 300px;
	width: calc(100vw - 500px);
`

export const Container = styled(ContentContainer)`
	height: 100vh;
	overflow: scroll;
	padding: 0vh 0 12vh 0;
	@media only screen and (max-width: 500px) {
		width: 100vw;
		padding: 0vh 20px 18vh 20px;
	}
`
