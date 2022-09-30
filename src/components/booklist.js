import {useState, useEffect} from 'react';

export default function BookList() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetchBooks();
		async function fetchBooks() {
			try {
				const response = await fetch('/api/books');
				const json = await response.json();
				const data = json.data;
				setBooks(data);
			} catch (error) {
				console.log(error);
			}
		}
	}, []);
	return (
		<>
			<form
				onSubmit={async event => {
					event.preventDefault();
					const formData = new FormData(event.target);
					const formValues = Object.fromEntries(formData);
					const response = await fetch('/api/vacations', {
						method: 'POST',
						body: JSON.stringify(formValues),
						headers: {'Content-Type': 'application/json'},
					});
					const json = await response.json();
					const data = json.data;
					setBooks(data);
				}}
			>
				<label htmlFor="title">Title: </label>
				<input type="text" placeholder="Moby Dick" required></input>
				<label htmlFor="author">Author: </label>
				<input type="text" name="author" placeholder="Herman Melville" required></input>
				<label htmlFor="rating">Rating: </label>
				<input type="number" min="1" max="10" name="rating" required></input>
				<button type="submit">Add</button>
			</form>
			<ul>
				{books.map(book => (
					<li key={book._id}>
						{book.title} by {book.author} Rating: {book.rating}
					</li>
				))}
			</ul>
		</>
	);
}
