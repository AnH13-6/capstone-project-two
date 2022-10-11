import Head from 'next/head';

import BookList from '../components/Booklist';
import Layout from '../components/Layout';
import Title from '../components/StyledTitle';

export default function BookListPage({books, onHandleBooks}) {
	return (
		<Layout>
			<Head>
				<title key="title">Booklist</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<Title>Booklist</Title>
			<BookList books={books} onHandleBooks={onHandleBooks} />
		</Layout>
	);
}
