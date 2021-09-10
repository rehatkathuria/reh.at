import styled from "styled-components"
import { VCREdgeOverlayTextStyle } from "@components/index/styles"

export const DateTimeContainer = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	grid-gap: 5px;
	left: 25px;
	bottom: 20px;
	position: absolute;
	@media only screen and (max-width: 500px) {
		left: 20px;
	}
`

export const DateStyle = styled(VCREdgeOverlayTextStyle)``

export const TimeStyle = styled(VCREdgeOverlayTextStyle)``
