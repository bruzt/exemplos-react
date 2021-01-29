import React from 'react';

import { Container } from './styles';

import Header from '../Header';
import Footer from '../Footer';

interface IProps {
	children: React.ReactNode;
}

export default function Landing({ children }: IProps) {
	
	return (
		<Container>

			<Header />
		
			<main>
				{children}
			</main>

			<Footer />
		</Container>
	);
}
