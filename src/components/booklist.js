import {useState, useEffect} from 'react';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import styled from 'styled-components';

import Button from './StyledButton';
import Card from './StyledCard';

export default function BookList() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetchBooks();
		async function fetchBooks() {
			try {
				const response = await fetch('/api/books');
				if (response.ok) {
					const data = await response.json();
					setBooks(data);
				} else {
					throw new Error('fetch failed');
				}
			} catch (error) {
				console.log(error);
			}
		}
	}, []);

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
				setBooks(newBooks);
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
				<form
					onSubmit={async event => {
						event.preventDefault();
						const formData = new FormData(event.target);
						const formValues = Object.fromEntries(formData);
						try {
							const response = await fetch('/api/books', {
								method: 'POST',
								body: JSON.stringify(formValues),
								headers: {'Content-Type': 'application/json'},
							});
							if (response.ok) {
								const data = await response.json();
								console.log('returned book:', data);
								setBooks([...books, data]);
							} else {
								throw new Error('post failed');
							}
						} catch (error) {
							console.log(error);
						}
					}}
				>
					<Fieldset>
						<div>
							<label htmlFor="title">Title: </label>
							<input
								type="text"
								name="title"
								placeholder="Moby Dick"
								required
								style={{width: '200px'}}
							></input>
						</div>
						<div>
							<label htmlFor="author">Author: </label>

							<input
								type="text"
								name="author"
								placeholder="Herman Melville"
								required
								style={{width: '200px'}}
							></input>
						</div>
						<div>
							<label htmlFor="rating">Rating: </label>
							<input type="number" min="1" max="10" name="rating" required></input>
						</div>
						<Button type="submit">Add</Button>
					</Fieldset>
				</form>

				<StyledList>
					{books.map(book => (
						<li key={book._id}>
							<Card>
								{book.title} by {book.author}
								<br></br>
								Rated: {book.rating}
								{'/10'}
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

const Fieldset = styled.fieldset`
	display: grid;
	gap: 8px;
	justify-content: center;
`;

const StyledList = styled.ul`
	justify-content: space-evenly;
	margin-bottom: 4rem;
	list-style: none;
	text-align: center;
`;
