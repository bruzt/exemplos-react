import React from 'react';

import logoRodapeImg from '../../assets/img/logoRodape.png';

export default class SocialMediaFooter extends React.Component {

    render(){
        return (
            <div className="container-fluid bg-rodape2">
                <div className="container py-4">
                    <img src={logoRodapeImg} alt="rodapeAlt" className='img-fluid mx-auto d-block' />
                    <div className="text-center pt-1">
                        <a href="#" className='icone-social ml-2' target='_blank'>
                            <i className='fa fa-facebook-square fa-lg' />
                        </a>
                        <a href="#" className='icone-social ml-2' target='_blank'>
                            <i className='fa fa-youtube fa-lg' />
                        </a>
                        <a href="#" className='icone-social ml-2' target='_blank'>
                            <i className='fa fa-instagram fa-lg' />
                        </a>
                        <a href="#" className='icone-social ml-2' target='_blank'>
                            <i className='fa fa-twitter-square fa-lg' />
                        </a>
                        <a href="#" className='icone-social ml-2' target='_blank'>
                            <i className='fa fa-linkedin fa-lg' />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}