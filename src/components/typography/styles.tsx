import styled from "styled-components"

export const Blurb = styled.span`
	color: ${(props) => props.theme.text};
	font-family: VCR;
	text-transform: uppercase;
	line-height: 1.35rem;
`

export const BlurbHighlighted = styled(Blurb)`
	background: ${(props) => props.theme.text};
	color: ${(props) => props.theme.background};
	padding: 3px 6px 4px 5px;
	width: fit-content;
`

export const P = styled.p`
	margin-bottom: 0.7em;
`
