import React from 'react';

import parc1Img from '../../assets/img/parceiro1.png';
import parc2Img from '../../assets/img/parceiro2.png';

export default class PartinersSection extends React.Component {

    render(){
        return (
            <div className="container-fluid bg-parceiros py-4" id='parceiros'>
                <div className="py-2">
                    <div className="container">
                        <header className='col-md-12'>
                            <h2 className='text-center'>
                                Conheça nossos paceiros
                                <span className='underline' />
                            </h2>
                        </header>
                        <div className="row py-4">
                            {/* Cards dos parceiros */}
                            <div className="col-md-2 padding-parceiro">
                                <div className="card sombra">
                                    <div className="card-body">
                                        <a href="#">
                                            <img src={parc1Img} alt="parc1" className='img-fluid mx-auto d-block' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 padding-parceiro">
                                <div className="card sombra">
                                    <div className="card-body">
                                        <a href="#">
                                            <img src={parc2Img} alt="parc2" className='img-fluid mx-auto d-block' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 padding-parceiro">
                                <div className="card sombra">
                                    <div className="card-body">
                                        <a href="#">
                                            <img src={parc1Img} alt="parc1" className='img-fluid mx-auto d-block' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 padding-parceiro">
                                <div className="card sombra">
                                    <div className="card-body">
                                        <a href="#">
                                            <img src={parc2Img} alt="parc2" className='img-fluid mx-auto d-block' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 padding-parceiro">
                                <div className="card sombra">
                                    <div className="card-body">
                                        <a href="#">
                                            <img src={parc1Img} alt="parc1" className='img-fluid mx-auto d-block' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 padding-parceiro">
                                <div className="card sombra">
                                    <div className="card-body">
                                        <a href="#">
                                            <img src={parc2Img} alt="parc2" className='img-fluid mx-auto d-block' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 padding-parceiro">
                                <div className="card sombra">
                                    <div className="card-body">
                                        <a href="#">
                                            <img src={parc1Img} alt="parc1" className='img-fluid mx-auto d-block' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 padding-parceiro">
                                <div className="card sombra">
                                    <div className="card-body">
                                        <a href="#">
                                            <img src={parc2Img} alt="parc2" className='img-fluid mx-auto d-block' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 padding-parceiro">
                                <div className="card sombra">
                                    <div className="card-body">
                                        <a href="#">
                                            <img src={parc1Img} alt="parc1" className='img-fluid mx-auto d-block' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 padding-parceiro">
                                <div className="card sombra">
                                    <div className="card-body">
                                        <a href="#">
                                            <img src={parc2Img} alt="parc2" className='img-fluid mx-auto d-block' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}