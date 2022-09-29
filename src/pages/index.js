import Head from 'next/head';

import BookList from '../components/booklist';
import Layout from '../components/Layout';

export default function HomePage() {
	return (
		<>
			<Layout>
				<Head>
					<title key="title">Books I read</title>
					<meta key="description" name="description" content="This is my project" />
				</Head>
				<h1>Books I read</h1>
				<BookList />
			</Layout>
		</>
	);
}
