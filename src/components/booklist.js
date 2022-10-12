import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Link from 'next/link';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import styled from 'styled-components';

import Button from './StyledButton';

export default function BookList({books, onHandleBooks}) {
	async function deleteBook(bookId) {
		try {
			const response = await fetch('/api/books', {
				method: 'DELETE',
				body: JSON.stringify({_id: bookId}),
				headers: {'Content-Type': 'application/json'},
			});
			if (response.ok) {
				const data = await response.json();
				console.log('returned book:', data);
				const newBooks = books.filter(book => book._id !== bookId);
				onHandleBooks(newBooks);
			} else {
				throw new Error('delete failed');
			}
		} catch (error) {
			console.log(error);
		}
	}

	const submit = id => {
		confirmAlert({
			message: 'Do you really want to delete this book?',
			buttons: [
				{
					label: 'Yes',
					onClick: () => deleteBook(id),
				},
				{
					label: 'No',
				},
			],
		});
	};

	return (
		<>
			<StyledList>
				{books?.map(book => (
					<li key={book._id}>
						<Card color={book.rating}>
							<div>
								<p>
									{book.title} by {book.author}
								</p>
								<p>
									Rated: {book.rating}
									{'/10'}
								</p>
							</div>
							<ButtonContainer>
								<Button>
									<Link href={`/${book._id}`} passHref>
										See more
									</Link>
								</Button>
								<Button onClick={() => submit(book._id)}>
									<RemoveCircleIcon />
								</Button>
							</ButtonContainer>
						</Card>
					</li>
				))}
			</StyledList>
		</>
	);
}

const StyledList = styled.ul`
	margin-bottom: 4rem;
	padding: 10px;
	list-style: none;
	text-align: center;
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 400px;
	min-height: 120px;
	margin: 15px 15px 0;
	padding: 5px;
	border-radius: 0.25rem;
	${props => props.color === 1 && 'background-color: #fbf8cc'};
	${props => props.color === 2 && 'background-color: #fde4cf'};
	${props => props.color === 3 && 'background-color: #ffcfd2'};
	${props => props.color === 4 && 'background-color: #f1c0e8'};
	${props => props.color === 5 && 'background-color: #cfbaf0'};
	${props => props.color === 6 && 'background-color: #a3c4f3'};
	${props => props.color === 7 && 'background-color: #90dbf4'};
	${props => props.color === 8 && 'background-color: #8eecf5'};
	${props => props.color === 9 && 'background-color: #98f5e1'};
	${props => props.color === 10 && 'background-color: #b9fbc0'};
	box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
	word-wrap: break-word;
`;

const ButtonContainer = styled.div`
	flex-direction: column;
	justify-content: flex-start;
`;
