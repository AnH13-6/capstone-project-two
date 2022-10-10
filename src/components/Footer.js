import Link from 'next/link';
import styled from 'styled-components';

export default function Footer() {
	return (
		<StyledFooter>
			<Navigation>
				<Link href="/">
					<StyledLink>Home</StyledLink>
				</Link>
				<Link href="/booklist">
					<StyledLink>Booklist</StyledLink>
				</Link>
				<Link href="/favoriteBooks">
					<StyledLink>Favorite Books</StyledLink>
				</Link>
			</Navigation>
		</StyledFooter>
	);
}

const Navigation = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	height: 4rem;
`;

const StyledLink = styled.a`
	text-decoration: 'none';
	&:hover,
	&focus {
		color: 'red';
	}
	&:active {
		color: darkred;
	}
`;

const StyledFooter = styled.footer`
	position: fixed;
	bottom: 0;
	flex-direction: column;
	width: 100%;
	border: 2px solid black;
	border-radius: 10px;
	background: teal;
`;
