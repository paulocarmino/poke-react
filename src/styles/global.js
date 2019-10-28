import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	html, body, #root {
		height: 100%;
    width: 100%;
    overflow-x: hidden;

	}


	body {
		font: 14px 'Roboto', sans-serif;
		background: #fff;
		color: #333;
		-webkit-font-smoothing: antialiased !important;
		-moz-osx-font-smoothing: grayscale !important;
    -webkit-overflow-scrolling: touch;
	}

	ul {
		list-style: none;
	}

`;
