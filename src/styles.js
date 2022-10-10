import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
	}

	#__next{
width: 100%;
	}
	body {
		display: flex;
		margin: 0;
		background-color: #FCF8E8;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 1rem;
	}

	form {
        flex-direction: column;
    }
`;
export const colorNumbers = [
	{colorId: 1, colorCode: 'fbf8cc'},
	{colorId: 2, colorCode: 'fde4cf'},
	{colorId: 3, colorCode: 'ffcfd2'},
	{colorId: 4, colorCode: 'f1c0e8'},
	{colorId: 5, colorCode: 'cfbaf0'},
	{colorId: 6, colorCode: 'a3c4f3'},
	{colorId: 7, colorCode: '90dbf4'},
	{colorId: 8, colorCode: '8eecf5'},
	{colorId: 9, colorCode: '98f5e1'},
	{colorId: 10, colorCode: 'b9fbc0'},
];
