import Head from 'next/head';

import Layout from '../components/Layout';
import H1 from '../components/styledH1';

export default function FavoriteBooksPage() {
	return (
		<Layout>
			<Head>
				<title key="title">Favorite Books</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<H1>Favorite Books</H1>
		</Layout>
	);
}
