import Link from 'next/link';
import styled from 'styled-components';

export default function Footer() {
	return (
		<StyledFooter>
			<Navigation>
				<Link href="/" passHref>
					<StyledLink>Home</StyledLink>
				</Link>
				<Link href="/booklist" passHref>
					<StyledLink>Booklist</StyledLink>
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
	color: black;
	font-size: 18px;
	text-decoration: none;
	&:hover {
		color: white;
	}
	&:active {
		background-color: #024;
		color: #fff;
	}
`;

const StyledFooter = styled.footer`
	position: fixed;
	bottom: 0;
	flex-direction: column;
	width: 100%;
	background: #76b5c5;
`;
