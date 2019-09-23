import React from 'react';

import img1Img from '../../assets/img/img1.png';
import img2Img from '../../assets/img/img2.png';
import img3Img from '../../assets/img/img3.png';

export default class ServicesSection extends React.Component {

    render(){
        return (
            <div className="container-fluid bg-servicos" id='servicos'>
                <div className="mt-2 py-4">
                    <section className='container'>
                        <header className='col-md-12'>
                            <h2 className='text-center text-light'>
                                O que fazemos?
                                <span className='underline' />
                            </h2>
                        </header>
                        <div className='row py-4'>
                            <div className="col-md-4">
                                <img src={img1Img} alt="img1" className='img-fluid' />
                                <p className='text-center text-light mt-2'>Criação de Web Sites responsivos</p>
                            </div>
                            <div className="col-md-4">
                                <img src={img2Img} alt="img2" className='img-fluid' />
                                <p className='text-center text-light mt-2'>Criação aplicativos android</p>
                            </div>
                            <div className="col-md-4">
                                <img src={img3Img} alt="img3" className='img-fluid' />
                                <p className='text-center text-light mt-2'>Otimização de sites na web</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}