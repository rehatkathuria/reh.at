import styled from "styled-components"

export const ArrowContainer = styled.div`
	place-self: center;
`

export const Menu = styled.div`
	text-transform: uppercase;
	position: fixed;
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

export const MobileMenu = styled.div`
	align-content: center;
	background: ${(props) => props.theme.background};
	display: grid;
	place-items: baseline;
	text-transform: uppercase;
	width: 100vw;
	height: 100vh;
	position: absolute;
	z-index: 100;
`

export const MobileMenuTitleInactive = styled(MenuTitleInactive)`
	font-size: 7vw;
`

export const MobileMenuTitleActive = styled(MenuTitleActive)`
	font-size: 7vw;
`
