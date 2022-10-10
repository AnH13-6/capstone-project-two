import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import styled from 'styled-components';

import Button from './StyledButton';
import Card from './StyledCard';

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
			<Container>
				<StyledList>
					{books?.map(book => (
						<li key={book._id}>
							<Card>
								<div>
									<p>
										{book.title} by {book.author}
									</p>
									<p>
										Rated: {book.rating}
										{'/10'}
									</p>
								</div>

								<Button onClick={() => submit(book._id)}>Delete</Button>
							</Card>
						</li>
					))}
				</StyledList>
			</Container>
		</>
	);
}

const Container = styled.div`
	padding: 10px;
	gap: 5px;
`;

const StyledList = styled.ul`
	justify-content: space-evenly;
	margin-bottom: 4rem;
	padding-left: 0;
	list-style: none;
	text-align: center;
`;
