import { grain } from "@components/grain"
import styled, { keyframes } from "styled-components"

export const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: grid;
	place-items: center;
	align-content: center;
	grid-gap: 20px;
`

export const staticGrain = keyframes`
	0%, 100% {
		transform: translate(0,0);
	}
	10% {
		transform: translate(-5%,-10%);
	}
	30% {
		transform: translate(3%,-15%);
	}
	50% {
		transform: translate(12%,9%);
	}
	70% {
		transform: translate(9%,4%);
	}
	90% {
		transform: translate(-1%,7%);
	}
`

export const GrainContainer = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	position: absolute;
`

export const Grain = styled.div`
	content: "";
	position: absolute;
	width: 400vw;
	height: 400vh;
	left: -50vw;
	top: -50vh;
	background-image: url("${grain}");

	&:after {
		animation: ${staticGrain} 1.5s steps(6) infinite;
	}
	animation: ${staticGrain} 1.5s steps(6) infinite;
`

export const Menu = styled.div`
	text-transform: uppercase;
	position: absolute;
	height: 100vh;
	display: grid;
	align-content: center;
	@media only screen and (max-width: 900px) {
		display: none;
	}
`

export const MenuItem = styled.div`
	display: grid;
	grid-template-columns: 25px auto;
	color: ${(props) => props.theme.text};
	font-family: VCR;
	letter-spacing: 0.2rem;
`

export const MenuTitleInactive = styled.h3`
	cursor: pointer;
	color: ${(props) => props.theme.text};
	font-family: VCR;
	letter-spacing: 0.2rem;
	padding: 5px 6px 6px 8px;
`

export const MenuTitleActive = styled(MenuTitleInactive)`
	background: ${(props) => props.theme.text};
	color: ${(props) => props.theme.background};
`

export const HeaderContainer = styled.div`
	display: grid;
	place-items: center;
	width: 100vw;
	position: fixed;
	top: 15px;
`

export const Header = styled.h2`
	font-family: VCR;
	letter-spacing: 0.25rem;
	text-align: center;
	color: ${(props) => props.theme.text};
	text-transform: uppercase;
`

export const ArrowContainer = styled.div`
	place-self: center;
`

export const DateTimeContainer = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	grid-gap: 5px;
	left: 25px;
	bottom: 20px;
	position: absolute;
`
export const PlaybackContainer = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	grid-gap: 5px;
	position: absolute;
	right: 30px;
	bottom: 20px;
`

const VCREdgeOverlayTextStyle = styled.h2`
	color: ${(props) => props.theme.text};
	font-family: VCR;
	text-transform: uppercase;
	font-size: 1.3rem;
`

export const DateStyle = styled(VCREdgeOverlayTextStyle)``

export const TimeStyle = styled(VCREdgeOverlayTextStyle)``

export const PlaybackControl = styled(VCREdgeOverlayTextStyle)`
	text-align: right;
`

export const Playback = styled(VCREdgeOverlayTextStyle)``
