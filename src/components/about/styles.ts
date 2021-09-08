import styled from "styled-components"

export const Container = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
	overflow-y: scroll;
	width: 500px;
`

export const Blurb = styled.div`
	color: ${(props) => props.theme.text};
	font-family: VCR;
	text-transform: uppercase;
`

export const BlurbHighlighted = styled(Blurb)`
	background: ${(props) => props.theme.text};
	color: ${(props) => props.theme.background};
	padding: 3px;
	padding-left: 5px;
	width: fit-content;
`

export const P = styled.p`
	margin-bottom: 0.7em;
`
