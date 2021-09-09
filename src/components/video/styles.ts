import styled from "styled-components"

export const Video = styled.video`
	height: 475px;
	width: 475px;
	border: 5px solid white;
	margin: 10px 0 10px 0;
	@media only screen and (max-width: 650px) {
		height: 80vw;
		width: 80vw;
	}
`