import {useState, useEffect} from 'react';

import {GlobalStyle} from '../styles';

export default function App({Component, pageProps}) {
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
	}, [books]);

	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} books={books} onHandleBooks={setBooks} />
		</>
	);
}
