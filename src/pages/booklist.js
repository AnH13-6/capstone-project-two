import Head from 'next/head';

import BookList from '../components/Booklist';
import Layout from '../components/Layout';
import H1 from '../components/styledH1';

export default function BookListPage({books, onHandleBooks}) {
	return (
		<>
			<Layout>
				<Head>
					<title key="title">Booklist</title>
					<meta key="description" name="description" content="About" />
				</Head>
				<H1>Booklist</H1>
				<BookList books={books} onHandleBooks={onHandleBooks} />
			</Layout>
		</>
	);
}
