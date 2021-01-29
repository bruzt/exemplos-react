import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

let isFirstRender = true;

export default function Header() {

	const [panelOpenState, setPanelOpen] = useState(false);

	useEffect( () => {
		if(isFirstRender) isFirstRender = false;
	}, [])

	return (
		<Container>

			<button 
				type='button'
				onClick={() => setPanelOpen(!panelOpenState)}
			>
				Menu
			</button>

			<div className={`menu-panel ${panelOpenState ? 'open' : 'close'} ${isFirstRender ? 'first-render' : ''}`}>
				<ul>
					<li>
						<Link to="/">Landing</Link>
					</li>
					<li>
						<Link to="/menu1">Menu 1</Link>
					</li>
					<li>
						<a href="#">Menu 2</a>
					</li>
				</ul>
			</div>
			
		</Container>
	);
}
