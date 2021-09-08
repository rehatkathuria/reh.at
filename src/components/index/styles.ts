import styled from "styled-components"

export const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: grid;
	place-items: center;
	align-content: center;
	grid-gap: 20px;
`

export const Menu = styled.div`
	text-transform: uppercase;
	position: absolute;
	height: 100vh;
	display: grid;
	align-content: center;
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

export const DateStyle = styled.h2`
	color: ${(props) => props.theme.text};
	font-family: VCR;
	text-transform: uppercase;
	font-size: 1.3rem;
`

export const TimeStyle = styled(DateStyle)``

export const PlaybackContainer = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	grid-gap: 5px;
	position: absolute;
	right: 30px;
	bottom: 20px;
`

export const PlaybackControl = styled(DateStyle)`
	text-align: right;
`

export const Playback = styled(DateStyle)``
