import styled from "styled-components"

export const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: grid;
	place-items: start;
	place-content: center;
	grid-gap: 20px;
`

export const Menu = styled.div`
	text-transform: uppercase;
	margin-left: -25px;
`

export const MenuItem = styled.h2`
	display: grid;
	grid-template-columns: 25px auto;
	font-family: VCR;
	letter-spacing: 0.2rem;
	color: ${(props) => props.theme.text};
`

export const Header = styled.h1`
	font-family: VCR;
	letter-spacing: 0.25rem;
	text-align: center;
	color: ${(props) => props.theme.text};
	text-transform: uppercase;
`

export const ArrowContainer = styled.div``

export const DateTimeContainer = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	grid-gap: 5px;
	left: 25px;
	bottom: 20px;
	position: absolute;
`

export const DateStyle = styled.h2`
	color: ${(props) => props.theme.text};
	font-family: VCR;
	text-transform: uppercase;
`

export const TimeStyle = styled.h2`
	color: ${(props) => props.theme.text};
	font-family: VCR;
	text-transform: uppercase;
`

export const PlaybackContainer = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	grid-gap: 5px;
	position: absolute;
	right: 30px;
	bottom: 20px;
`

export const PlaybackControl = styled.h2`
	color: ${(props) => props.theme.text};
	font-family: VCR;
	text-align: right;
	text-transform: uppercase;
`

export const Playback = styled.h2`
	color: ${(props) => props.theme.text};
	font-family: VCR;
	text-transform: uppercase;
`
