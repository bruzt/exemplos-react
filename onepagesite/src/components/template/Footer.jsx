import React from 'react';

export default class Footer extends React.Component {

    render(){
        return (
            <footer className='container-fluid bg-rodape1'>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h5 className='text-light align-middle'>
                                <i className='fa fa-info-circle fa-2x mr-2 text-light' />
                                Cursos mais visitados
                            </h5>
                            <ul className='text-light'>
                                <li>
                                    <a href="#" className='text-light'>
                                        <i className='fa fa-angle-right' /> Outra coisa 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-light'>
                                        <i className='fa fa-angle-right' /> Outra coisa 2
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-light'>
                                        <i className='fa fa-angle-right' /> Outra coisa 3
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-light'>
                                        <i className='fa fa-angle-right' /> Outra coisa 4
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-light'>
                                        <i className='fa fa-angle-right' /> Outra coisa 5
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='text-light'>
                                        <i className='fa fa-angle-right' /> Outra coisa 6
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className='text-light'>
                                        Sobre
                                        <span className='underline-footer'></span>
                                    </h6>
                                    <ul className='text-light'>
                                        <li>
                                            <a href="#" className='text-light'>
                                                Quem somos?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className='text-light'>
                                                Parceiros
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className='text-light'>
                                                Portifólio
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className='text-light'>
                                                Contato
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h6 className='text-light'>
                                            Cursos
                                        <span className='underline-footer'></span>
                                    </h6>
                                    <ul className='text-light'>
                                        <li>
                                            <a href="#" className='text-light'>
                                                O que é?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className='text-light'>
                                                Cursos
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className='text-light'>
                                                Disponíveis
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className='text-light'>
                                                Instrutores
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-light mb-3 bg-card-rodape">
                                <div className="card-body">
                                    <h4 className='card-title'>
                                        <i className='fa fa-building mr-2 fa-2x icon-banner-rodape' />
                                        Traga sua empresa
                                    </h4>
                                    <p className='card-text text-justify'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quia maxime quo! Esse enim distinctio, tempora fugit corrupti assumenda, quod culpa recusandae placeat, aliquam facere porro nulla nihil facilis deserunt?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                    
            </footer>
        );
    }
}