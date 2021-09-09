import styled from "styled-components"

export const Video = styled.video`
	height: 495px;
	width: 495px;
	border: 5px solid white;
	margin: 10px 0 10px 0;
	@media only screen and (max-width: 650px) {
		height: calc(90vw - 20px);
		width: calc(90vw - 20px);
	}
`
