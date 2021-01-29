import React, { FormEvent, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../assets/logo-jovemnerd.png';

export default function Header() {

	const [isScrolledDown, setScrolledDown] = useState(false);

	useEffect( () => {
		scrollListener();

		window.addEventListener('scroll', scrollListener);

		return () => window.removeEventListener('scroll', scrollListener);
	}, []);

	function scrollListener() {
		if(window.pageYOffset > 50) setScrolledDown(true);
		else setScrolledDown(false);
	}


	function onSearchSubmit(event: FormEvent){

		event.preventDefault();
	}

	return (
		<Container>
			<nav 
				className={`
					main-nav 
					${isScrolledDown ? 'scroll-down' : 'scroll-top'}
					${window.pageYOffset == 0 || window.pageYOffset > 100 ? 'transition-0' : ''}
				`}
			>
				<div className="limit-width">

					<Link to='/'>
						<figure className="img-container">
							<img 
								src={logo} 
								alt="logo jovem nerd" 
								className={`
									${isScrolledDown ? 'scroll-down' : ''}
									${window.pageYOffset == 0 || window.pageYOffset > 100 ? 'transition-0' : ''}
								`} 
							/>
						</figure>
					</Link>

					<div className="menu">
						<ul>
							<li>
								<Link to="/nerdcast">NerdCast</Link>
							</li>
							<li>
								<a href="#">NerdOffice</a>
							</li>
							<li>
								<a href="#">NerdPlayer</a>
							</li>
							<li>
								<a href="#">Mais</a>
							</li>
							<li>
								<a href="#">Nerdstore</a>
							</li>
							<li>
								<a href="#">Anuncie</a>
							</li>
							<li>
								<form className="search-bar" onSubmit={onSearchSubmit}>
									<input type="text" placeholder='Pesquise' />
									<button type='submit'>
										Buscar <FaSearch size={20} />
									</button>
								</form>
							</li>
							<li>
								<a href="#">theme</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<nav 
				className={`
					secondary-nav 
					${isScrolledDown ? 'scroll-down' : 'scroll-top'} 
					${window.pageYOffset == 0 || window.pageYOffset > 100 ? 'animation-none' : ''}
				`}
			>
				<div className="limit-width">
					<ul>
						<li>
							<a href="#">NerdBunker</a>
						</li>
					</ul>
				</div>
			</nav>
		</Container>
	);
}
