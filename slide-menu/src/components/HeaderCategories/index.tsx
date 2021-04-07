import React, { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { randomBytes } from 'crypto';
import ClickAwayListener from 'react-click-away-listener';

import { Container } from './styles';

const fakeCategories = [
	{
		id: 1,
		name: 'Hardware',
		parante_id: 0,
	},
	{
		id: 2,
		name: 'Periférico',
		parante_id: 0,
	},
	{
		id: 3,
		name: 'Processador',
		parante_id: 1,
	},
	{
		id: 4,
		name: 'Placa de Video',
		parante_id: 1,
	},
	{
		id: 5,
		name: 'AMD',
		parante_id: 3,
	},
	{
		id: 6,
		name: 'Intel',
		parante_id: 3,
	},
	{
		id: 7,
		name: 'AMD',
		parante_id: 4,
	},
	{
		id: 8,
		name: 'Nvidia',
		parante_id: 4,
	},
	{
		id: 9,
		name: 'Joystick/Controle',
		parante_id: 2,
	},
	{
		id: 10,
		name: 'Mouse/Teclado',
		parante_id: 2,
	},
];

export default function Header() {

	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
	const [menuIndex, setMenuIndex] = useState<number | undefined>(0);
	const [categories, setCategories] = useState(fakeCategories);
	const [JSXCategories, setJSXCategories] = useState<JSX.Element[] | undefined>([]);

	const menuIndexRef = useRef<number>();
	menuIndexRef.current = menuIndex;

	const JSXCategoriesRef = useRef<JSX.Element[]>();
	JSXCategoriesRef.current = JSXCategories;

	useEffect(() => {
		createRoot();
	}, []);

	/*useEffect(() => {
		if(isSideMenuOpen == false){
			setTimeout( () => {
				setMenuIndex(0);
				createRoot();
			}, 300);
		}
	}, [isSideMenuOpen]);*/

	function createRoot() {

		const root = categories.filter((category) => category.parante_id == 0 || category.parante_id == null);

		const reactRoot = root.map((rootCategory) => {

			const childrens = categories.filter((category) => category.parante_id == rootCategory.id);
			const haveChildren = childrens.length > 0 ? true : false;

			return (
				<div key={rootCategory.id}>
					<span>{rootCategory.name}</span>
					{haveChildren &&
						(
							<button
								type='button'
								className='foward-button'
								onClick={() => createChildren(rootCategory.id)}
							>
								<BsArrowRight size={24} />
							</button>
						)
					}
				</div>
			);
		});

		const key = randomBytes(8).toString('hex');

		const menuSection = (
			<div key={key} className="menu-section">
				<div>
					<h3>Categorias</h3>
				</div>
				{reactRoot}
			</div>
		);

		setJSXCategories([menuSection]);
	}

	function createChildren(id: number) {

		const children = categories.filter((category) => category.parante_id == id);

		const reactChildren = children.map((childCategory) => {

			const childChildrens = categories.filter((category) => category.parante_id == childCategory.id);
			const haveChildren = childChildrens.length > 0 ? true : false;

			return (
				<div key={childCategory.id}>
					<span>{childCategory.name}</span>
					{haveChildren && 
						(
							<button type='button' onClick={() => createChildren(childCategory.id)}>
								<BsArrowRight size={24} />
							</button>
						)
					}
				</div>
			);
		});

		const key = randomBytes(8).toString('hex');

		const menuSection = (
			<div key={key} className="menu-section">
				<div className='back-div'>
					<button
						type='button'
						className='back-button'
						onClick={backButton}
					>
						<span>Voltar</span> <BsArrowLeft size={28} />
					</button>
				</div>

				{reactChildren}
			</div>
		);

		const JSXCategoriesCopy = [ ...JSXCategoriesRef.current as JSX.Element[] ];
		JSXCategoriesCopy.push(menuSection);

		setJSXCategories(JSXCategoriesCopy);
		setMenuIndex(Number(menuIndexRef.current) + 1);
	}

	function backButton() {

		setMenuIndex(Number(menuIndexRef.current) - 1);

		setTimeout(() => {
			const JSXCategoriesCopy = [ ...JSXCategoriesRef.current as JSX.Element[] ];
			JSXCategoriesCopy.pop();
			setJSXCategories(JSXCategoriesCopy);
		}, 300);
	}

	return (
		<Container>
			<button
				type='button'
				onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
			>
				<GiHamburgerMenu size={30} />
			</button>

			<ClickAwayListener onClickAway={() => { if(isSideMenuOpen) setIsSideMenuOpen(false) }}>
				<div className={`side-menu-container ${isSideMenuOpen ? 'open' : ''}`}>

						<div className="relative-menu">
							<div className="absolute-menu" style={{ left: `-${Number(menuIndex) * 250}px` }}>

								{JSXCategories}

							</div>
						</div>

				</div>
			</ClickAwayListener>
		</Container>
	);
}
