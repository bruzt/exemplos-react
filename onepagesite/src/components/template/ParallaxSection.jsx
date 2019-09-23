import React from 'react';
import { Waypoint } from 'react-waypoint';
import counterUp from 'counterup2';

export default class ParallaxSection extends React.Component {

    constructor(props){
        super(props);

        this.firstTimeWaypoint = true;
    }

    countWaypoint(){

        if(this.firstTimeWaypoint){

            this.firstTimeWaypoint = false;

            document.querySelectorAll('.contar').forEach( (item) => {
            
                counterUp(item, {
                    duration: 1000,
                    delay: 10,
                });
            });
        }
    }

    render(){
        return (
            <div className="container-fluid bg-parallax" id='cursos'>
                <div className="py-4">
                    <section className='container'>
                        <header className="col-md-12">
                            <h2 className='text-center text-light'>
                                Cursos
                                <span className='underline' />
                            </h2>
                            <p className='text-center text-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit sit libero atque, iste sint soluta voluptate iusto, facere deleniti, a labore voluptatum commodi quas mollitia provident tempore? Facilis, dolores tempora?</p>
                        </header>
                        <div className="row py-2">
                            <Waypoint onEnter={() => this.countWaypoint()} />
                            <div className="col-sm-6 col-md-3 col-lg-3">
                                <div className="fatos">
                                    <div className="icon">
                                        <i className='fa fa-play-circle' />
                                    </div>
                                    <div className="fatos-contador">
                                        <h3>+ <span className='contar'>43678</span></h3>
                                        <h4>Minutos de conteudo</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3">
                                <div className="fatos">
                                    <div className="icon">
                                        <i className='fa fa-book' />
                                    </div>
                                    <div className="fatos-contador">
                                        <h3><span className='contar'>16</span></h3>
                                        <h4>Cursos completos</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3">
                                <div className="fatos">
                                    <div className="icon">
                                        <i className='fa fa-users' />
                                    </div>
                                    <div className="fatos-contador">
                                        <h3><span className='contar'>28970</span></h3>
                                        <h4>Alunos</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3">
                                <div className="fatos">
                                    <div className="icon">
                                        <i className='fa fa-star' />
                                    </div>
                                    <div className="fatos-contador">
                                        <h3><span className='contar'>4.8</span></h3>
                                        <h4>Média de avaliação</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}