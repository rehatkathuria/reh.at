import styled from "styled-components"

export const Container = styled.div`
	display: grid;
	place-items: center;
	border: 0px dashed red;
	width: 500px;
	::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
`
