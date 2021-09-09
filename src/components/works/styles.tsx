import styled from "styled-components"

export const A = styled.a`
	text-decoration: none;
	&:visited {
		color: ${(props) => props.theme.background};
	}
`
