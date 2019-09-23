import React from 'react';

import banner1Img from '../../assets/img/banner1.jpg';
import banner2Img from '../../assets/img/banner2.jpg';

export default class CarouselSlide extends React.Component {

    render(){
        return (
            <div className="container-fluid my-2">
                <div className="carousel slide" data-ride='carousel' data-interval='4000' id='slideShow'>
                    <ol className='carousel-indicators'>
                        {/* indicadores dos slides */}
                        <li data-target='#slideShow' data-slide-to='0' className='active'></li>
                        <li data-target='#slideShow' data-slide-to='1'></li>
                    </ol>
                    <div className="carousel-inner">
                        {/* slides */}
                        <div className="carousel-item active">
                            <a href="#">
                                <img src={banner1Img} alt="slide1" className='d-block w-100' />
                            </a>
                        </div>
                        <div className="carousel-item">
                            <a href="#">
                                <img src={banner2Img} alt="slide2" className='d-block w-100' />
                            </a>
                        </div>
                    </div>
                    {/* navegação dos slides */}
                    <a href="#slideShow" className='carousel-control-prev' role='button' data-slide='prev'>
                        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                        <span className='sr-only'>Anterior</span>
                    </a>
                    <a href="#slideShow" className='carousel-control-next' role='button' data-slide='next'>
                        <span className='carousel-control-next-icon' aria-hidden='true'></span>
                        <span className='sr-only'>Próximo</span>
                    </a>
                </div>
            </div>
        );
    }
}