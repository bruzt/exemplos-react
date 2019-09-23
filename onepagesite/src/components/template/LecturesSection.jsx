import React from 'react';

export default class LecturesSection extends React.Component {

    render(){
        return (
            <div className="container-fluid">
                <div className="my-2 py-4">
                    <section className='container'>
                        <header className="col-md-12">
                            <h2 className='text-center'>
                                Cursos com descontos
                                <span className='underline' />
                            </h2>
                        </header>
                        <div className="row py-4">
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="tabela-preco sombra">
                                    <div className="preco-detalhe">
                                        <h2>Alguma coisa 1</h2>
                                        <strike>R$ 429,99</strike>
                                        <span>R$ 19,90</span>
                                        <ul>
                                            <li>Video sobre demanda de 5h</li>
                                            <li>+ de 40 video aulas</li>
                                            <li>Acesso total e vitalicio</li>
                                            <li>Certificado de conclusão</li>
                                        </ul>
                                    </div>
                                    <div className="preco-botao">
                                        <a href="#" className='btn btn-preco'>Comprar Agora</a>
                                    </div>
                                    <small>* Garantia de satisfação de 30 dias</small>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="tabela-preco sombra">
                                    <div className="preco-detalhe">
                                        <h2>Alguma coisa 2</h2>
                                        <strike>R$ 429,99</strike>
                                        <span>R$ 19,90</span>
                                        <ul>
                                            <li>Video sobre demanda de 5h</li>
                                            <li>+ de 40 video aulas</li>
                                            <li>Acesso total e vitalicio</li>
                                            <li>Certificado de conclusão</li>
                                        </ul>
                                    </div>
                                    <div className="preco-botao">
                                        <a href="#" className='btn btn-preco'>Comprar Agora</a>
                                    </div>
                                    <small>* Garantia de satisfação de 30 dias</small>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="tabela-preco sombra">
                                    <div className="preco-detalhe">
                                        <h2>Alguma coisa 3</h2>
                                        <strike>R$ 429,99</strike>
                                        <span>R$ 19,90</span>
                                        <ul>
                                            <li>Video sobre demanda de 5h</li>
                                            <li>+ de 40 video aulas</li>
                                            <li>Acesso total e vitalicio</li>
                                            <li>Certificado de conclusão</li>
                                        </ul>
                                    </div>
                                    <div className="preco-botao">
                                        <a href="#" className='btn btn-preco'>Comprar Agora</a>
                                    </div>
                                    <small>* Garantia de satisfação de 30 dias</small>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="tabela-preco sombra">
                                    <div className="preco-detalhe">
                                        <h2>Alguma coisa 4</h2>
                                        <strike>R$ 429,99</strike>
                                        <span>R$ 19,90</span>
                                        <ul>
                                            <li>Video sobre demanda de 5h</li>
                                            <li>+ de 40 video aulas</li>
                                            <li>Acesso total e vitalicio</li>
                                            <li>Certificado de conclusão</li>
                                        </ul>
                                    </div>
                                    <div className="preco-botao">
                                        <a href="#" className='btn btn-preco'>Comprar Agora</a>
                                    </div>
                                    <small>* Garantia de satisfação de 30 dias</small>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}