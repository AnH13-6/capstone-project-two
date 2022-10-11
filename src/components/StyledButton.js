import styled from 'styled-components';

const Button = styled.button`
	align-self: flex-end;
	max-width: 80px;
	margin: 0.5em 5px 5px;
	padding: 0.25em 0.25em;
	border: 2px solid lightcoral;
	border-radius: 3px;
	background-color: lightpink;
	color: darkred;
	font-size: 1em;
	&:hover {
		background: #c39696;
	}
`;

export default Button;
