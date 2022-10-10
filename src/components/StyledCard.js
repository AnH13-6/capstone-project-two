import styled from 'styled-components';

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 400px;
	min-height: 120px;
	margin-top: 15px;
	margin-right: 15px;
	margin-left: 15px;
	padding: 5px;
	border: 3px solid;
	border-radius: 0.25rem;
	border-color: #94b49f;
	background-color: #d7d6db;
	box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px hsla(0, 0%, 76.9%, 0.4);
	word-wrap: break-word;
`;

export default Card;
