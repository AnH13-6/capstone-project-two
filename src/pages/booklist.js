import Head from 'next/head';

import BookList from '../components/booklist';
import Layout from '../components/Layout';
import H1 from '../components/styledH1';

export default function BookListPage() {
	return (
		<>
			<Layout>
				<Head>
					<title key="title">Booklist</title>
					<meta key="description" name="description" content="About" />
				</Head>
				<H1>Booklist</H1>
				<BookList />
			</Layout>
		</>
	);
}
