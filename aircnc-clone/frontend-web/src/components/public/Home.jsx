import React from 'react';

import  './Home.css';

import Header from '../common/Header';
import Footer from '../common/Footer';
import MenuPublic from './template/MenuPublic';
import MainPublic from './template/MainPublic';
import RightPanelPublic from './template/RightPanelPublic';

export default class Home extends React.Component {

    constructor(props){
        super(props);

        document.title = 'React Home';
    }

    render() {
        return (
            <React.Fragment>

                <div className='container-fluid'>
                    <div className="row">
                        <div className="col p-0">
                            
                            <Header login='true' />

                        </div>
                    </div>
                    <div className="row">
                        <div className="col p-0">

                            <MenuPublic />

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 p-0">

                            <MainPublic />

                        </div>

                        <div className="col-lg-4 p-0">

                            <RightPanelPublic />

                        </div>
                    </div>

                </div>
                
                <div className="container-fluid">
                    <div className="row">
                        <div className="col p-0">

                            <Footer />

                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}