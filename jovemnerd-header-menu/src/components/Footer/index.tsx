import React from 'react';

import { Container } from './styles';

export default function Footer() {

	return (
		<Container>

			<div className="limit-center">
				<div className="site-map">
					<div className="item">
						<h3>Sobre</h3>
						<ul>
							<li>
								<a href="#">Item 1</a>
							</li>
							<li>
								<a href="#">Item 2</a>
							</li>
							<li>
								<a href="#">Item 3</a>
							</li>
							<li>
								<a href="#">Item 4</a>
							</li>
							<li>
								<a href="#">Item 5</a>
							</li>
						</ul>
					</div>
					<div className="item">
						<h3>NerdBunker</h3>
						<ul>
							<li>
								<a href="#">Item 1</a>
							</li>
							<li>
								<a href="#">Item 2</a>
							</li>
							<li>
								<a href="#">Item 3</a>
							</li>
							<li>
								<a href="#">Item 4</a>
							</li>
							<li>
								<a href="#">Item 5</a>
							</li>
						</ul>
					</div>
					<div className="item">
						<h3>Programas</h3>
						<ul>
							<li>
								<a href="#">Item 1</a>
							</li>
							<li>
								<a href="#">Item 2</a>
							</li>
							<li>
								<a href="#">Item 3</a>
							</li>
							<li>
								<a href="#">Item 4</a>
							</li>
							<li>
								<a href="#">Item 5</a>
							</li>
						</ul>
					</div>
					<div className="item">
						<h3>NerdStore</h3>
						<ul>
							<li>
								<a href="#">Item 1</a>
							</li>
							<li>
								<a href="#">Item 2</a>
							</li>
							<li>
								<a href="#">Item 3</a>
							</li>
							<li>
								<a href="#">Item 4</a>
							</li>
							<li>
								<a href="#">Item 5</a>
							</li>
							<li>
								<a href="#">Item 6</a>
							</li>
							<li>
								<a href="#">Item 7</a>
							</li>
						</ul>
					</div>
					<div className="item">
						<h3>Redes Sociais</h3>
						<ul>
							<li>
								<a href="#">Item 1</a>
							</li>
							<li>
								<a href="#">Item 2</a>
							</li>
							<li>
								<a href="#">Item 3</a>
							</li>
							<li>
								<a href="#">Item 4</a>
							</li>
							<li>
								<a href="#">Item 5</a>
							</li>
							<li>
								<a href="#">Item 6</a>
							</li>
						</ul>
					</div>
					<div className="item">
						<h3>Nosso App</h3>
						<ul>
							<li>
								<a href="#">App Store</a>
							</li>
							<li>
								<a href="#">Google Play</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="footer-info">
					<div className="bug-link-and-copyrights">

						<a href="#" target="_blank" rel="noopener noreferrer">Reportar Erro</a>

						<div className="copyrights">
							<p>© 2002-2020 Jovem Nerd | Pazos, Ottoni & Cia | Versão 8.4.8</p>
							<p>Todas as imagens de filmes, séries e etc são marcas registradas dos seus respectivos proprietários.</p>
						</div>
					</div>
					<div className="developer">
						<span>IMG do Dev</span>
					</div>
				</div>
			</div>
			
		</Container>
	);
}
