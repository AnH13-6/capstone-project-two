import Head from 'next/head';

import Layout from '../components/Layout';
import Title from '../components/StyledTitle';

export default function FavoriteBooksPage() {
	return (
		<Layout>
			<Head>
				<title key="title">Favorite Books</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<Title>Favorite Books</Title>
		</Layout>
	);
}
