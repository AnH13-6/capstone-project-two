import {useState, useEffect} from 'react';

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
	// deleteFunction as used without mongodb:
	// function deleteBook(bookId) {
	// 	const newBooks = books.filter(book => {
	// 		if (book._id !==bookId){
	// 			return false;
	// 		} else {
	// 			return true;
	// 		}
	// 		});

	// tried to match the below "PUT" method to the delete function
	// try {
	// 	const response = await fetch('/api/books', {
	// 		method: 'DELETE',
	// 		body: JSON.stringify(formValues),
	// 		headers: {'Content-Type': 'application/json'},
	// 	});
	// 	if (response.ok) {
	// 		const data = await response.json();
	// 		console.log('returned book:', data);
	// 		setBooks([...books, data]);
	// 	} else {
	// 		throw new Error('post failed');
	// 	}
	// } catch (error) {
	// 	console.log(error);
	// }

	return (
		<>
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
				<label htmlFor="title">Title: </label>
				<input type="text" name="title" placeholder="Moby Dick" required></input>
				<label htmlFor="author">Author: </label>
				<input type="text" name="author" placeholder="Herman Melville" required></input>
				<label htmlFor="rating">Rating: </label>
				<input type="number" min="1" max="10" name="rating" required></input>
				<button type="submit">Add</button>
			</form>
			<ul>
				{books.map(book => (
					<li key={book._id}>
						{book.title} by {book.author} Rating: {book.rating}{' '}
						<button
						// onClick={() => {
						// 	//editBook(book._id);
						// }}
						>
							Edit
						</button>
						<button
						// onClick={() => {
						// 	//deleteBook(bookId);
						// }}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	);
}
