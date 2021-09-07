import styled from "styled-components"

export const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: grid;
	place-items: start;
	align-content: center;
	grid-gap: 20px;
`

export const Menu = styled.div`
	text-transform: uppercase;
`

export const MenuItem = styled.div`
	display: grid;
	grid-template-columns: 25px auto;
	color: ${(props) => props.theme.text};
	font-family: VCR;
	letter-spacing: 0.2rem;
`

export const MenuTitleActive = styled.h3`
	background: ${(props) => props.theme.text};
	color: ${(props) => props.theme.background};
	font-family: VCR;
	letter-spacing: 0.2rem;
	padding: 4px;
`

export const MenuTitleInactive = styled.h3`
	cursor: pointer;
	color: ${(props) => props.theme.text};
	font-family: VCR;
	letter-spacing: 0.2rem;
	padding: 4px;
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

export const DateStyle = styled.h2`
	color: ${(props) => props.theme.text};
	font-family: VCR;
	text-transform: uppercase;
	font-size: 1.3rem;
`

export const TimeStyle = styled.h2`
	color: ${(props) => props.theme.text};
	font-family: VCR;
	text-transform: uppercase;
	font-size: 1.3rem;
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
	font-size: 1.3rem;
	text-align: right;
	text-transform: uppercase;
`

export const Playback = styled.h2`
	color: ${(props) => props.theme.text};
	font-family: VCR;
	font-size: 1.3rem;
	text-transform: uppercase;
`
