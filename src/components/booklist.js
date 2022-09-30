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
