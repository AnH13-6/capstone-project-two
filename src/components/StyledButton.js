import styled from 'styled-components';

const Button = styled.button`
	align-self: flex-end;
	width: auto;
	max-width: 80px;
	height: 35px;
	margin: 0.5em 5px 5px;
	padding: 0.25em 0.25em;
	border: none;
	background-color: transparent;
	color: #eeeee4;

	font-size: 1em;
	&:hover {
		background: #c39696;
	}
`;

export default Button;
