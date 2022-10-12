import Head from 'next/head';
import {useRouter} from 'next/router';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Title from '../components/StyledTitle';

export default function Detailpage({books}) {
	const router = useRouter();
	const bookId = router.query.bookId;
	const book = books.find(event => event._id === bookId);

	return (
		<Layout>
			<Head>
				<title key="title">Detail page</title>
				<meta key="description" name="description" content="bookDetails" />
			</Head>
			{book && (
				<>
					<Title>{book.title}</Title>
					<DetailCard>
						<li>
							<p>Author: {book.author}</p>
						</li>
						<li>
							<p>Rating: {book.rating}/10</p>
						</li>
						<li>
							<h3>Reading Notes</h3>
						</li>
						<li>{book.readingNotes}</li>
					</DetailCard>
				</>
			)}
		</Layout>
	);
}

const DetailCard = styled.ul`
	display: flex;
	flex-direction: column;
	width: 300px;
	max-width: 500px;
	min-height: 400px;
	margin: 15px 15px 6rem;
	padding: 5px;
	border-radius: 0.25rem;
	box-shadow: rgba(100, 100, 100, 0.2) 0 3px 8px 0;
	list-style: none;
	word-wrap: break-word;
`;
