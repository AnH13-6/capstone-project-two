import Head from 'next/head';

import BookList from '../components/booklist';
import Layout from '../components/Layout';
import H1 from '../components/styledH1';

export default function HomePage() {
	return (
		<>
			<Layout>
				<Head>
					<title key="title">Add Books to List</title>
					<meta key="description" name="description" content="This is my reading list" />
				</Head>
				<H1>Add Books to List</H1>
				<BookList />
			</Layout>
		</>
	);
}
