import styled from 'styled-components';

import Footer from './Footer';

export default function Layout({children}) {
	return (
		<>
			<Main>{children}</Main>
			<Footer />
		</>
	);
}

const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
