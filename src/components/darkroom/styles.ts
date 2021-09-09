import { grain } from "@components/grain"
import styled, { keyframes } from "styled-components"
import { ContentContainer } from "@components/index/styles"

export const Container = styled(ContentContainer)`
	height: 100vh;
	overflow: scroll;
	padding: 36vh 0 36vh 0;
	@media only screen and (max-width: 500px) {
		width: 100vw;
		padding: 18vh 20px 18vh 20px;
	}
`
