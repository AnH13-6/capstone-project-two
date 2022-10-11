import Head from 'next/head';

import BookForm from '../components/BookForm';
import Layout from '../components/Layout';
import Title from '../components/StyledTitle';

export default function HomePage({books, onHandleBooks}) {
	return (
		<Layout>
			<Head>
				<title key="title">Add Books to List</title>
				<meta key="description" name="description" content="This is my reading list" />
			</Head>
			<Title>Add Books to List</Title>
			<BookForm books={books} onHandleBooks={onHandleBooks} />
		</Layout>
	);
}
