import styled from "styled-components"

export const Container = styled.div`
	height: 100vh;
	overflow-y: scroll;
	padding: 36vh 0 36vh 0;
	width: 500px;
	::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
`
