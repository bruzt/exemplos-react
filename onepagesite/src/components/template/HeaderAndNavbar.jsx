import React from 'react';

import logoImg from '../../assets/img/logo.png';

export default class HeaderAndNavbar extends React.Component {

    render(){
        return (
            <div className='container-fluid bg-topo' id='topo'>
                <header className='container'>
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        {/* logo */}
                        <a href="#" className='navbar-brand'>
                            <img src={logoImg} alt="logo-img" height='70' className='d-inline-block align-top' />
                        </a>
                        <button className="navbar-toggler" type='button' data-toggle='collapse' data-target='#menu' aria-controls='menu' aria-expanded='false' aria-label='menu colapso'>
                            <span className='navbar-toggler-icon text-light'></span>
                        </button>
                        <div id="menu" className='collapse navbar-collapse'>
                            <ul className='navbar-nav mr-auto text-light'>
                                {/* menus */}
                                <li className='nav-item'>
                                    <a href="#servicos" className='nav-link text-light font-weight-bold scroll-page'>
                                        Serviços
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a href="#parceiros" className='nav-link text-light font-weight-bold scroll-page'>
                                        Parceiros
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a href="#cursos" className='nav-link text-light font-weight-bold scroll-page'>
                                        Cursos
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a href="#" className='nav-link text-light font-weight-bold'>
                                        Contato
                                    </a>
                                </li>
                            </ul>
                            <a href="#" className='btn col-md-3 btn-orcamento'>Pedir um orçamento</a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}