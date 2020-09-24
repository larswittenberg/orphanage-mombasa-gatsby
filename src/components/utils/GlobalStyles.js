import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

	html {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-ms-text-size-adjust: 100%;
		-ms-overflow-style: scrollbar;
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: transparent;
		-webkit-overflow-scrolling: touch;
	}

	body {
		margin: 0;
		padding: 0;
		font-family: Georgia,serif;
		font-size: 17px;
		line-height: 1.6;
		color: #444;
	}

	*,
	:after,
	:before {
		box-sizing: border-box;
	}

	a {
		color: #126bb7;
	}

	small {
		font-size: 95%;
	}

	.sr-only {
		border: 0;
		clip: rect(0, 0, 0, 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}

	.first-letter {
		float: left;
		font-size: 300%;
		line-height: 95%;
		padding-right: 1%;
		color: #474747;
	}

	blockquote {
		.first-letter {
			line-height: 80%;
		}
		small {
			color: #6b6b6b;
		}
	}

	.sb-small {
		margin-bottom: 30px;
	}
	.sl-normal {
		margin-left: 30px;
	}
	.st-mini {
		margin-top: 5%;
	}
	.st-100 {
		margin-top: 100px;
	}
	.st-no-headline {
		margin-top: 12%;
	}
	.st-small {
		margin-top: 15%;
	}
	.sb65 {
		margin-bottom: 65px;
	}


	.polaroid {
		overflow: visible !important;
		margin: 30px 15px 50px;

		img {
			background: white;
			padding: 10px 10px 55px;
			text-align: center;
			-webkit-box-shadow: 0 4px 6px rgba(0,0,0,.5);
			-moz-box-shadow: 0 4px 6px rgba(0,0,0,.5);
			box-shadow: 0 4px 6px rgba(0,0,0,.5);
			-webkit-transform: rotate(4deg);
			-ms-transform: rotate(4deg);
			transform: rotate(4deg);
		}
	}

	.polaroid-left img {
		-webkit-transform: rotate(-4deg);
		-ms-transform: rotate(-4deg);
		transform: rotate(-4deg);
		max-width: 90%;
	}


	.ReactModal__Body--open {
		position: relative;
		height: 100%;
		overflow: hidden;
	}

	.ReactModal__Body--open .navbar-fixed-top {
		z-index: 1;
	}
`;
