import React from 'react';

import './HomeAdmin.css';

import Header from '../common/Header';
import Footer from '../common/Footer';
import MenuAdminTop from './template/MenuAdminTop';
import MenuAdminLeft from './template/MenuAdminLeft';
import MainAdmin from './template/MainAdmin';

export default class AdminHome extends React.Component {

    constructor(props){
        super(props);

        document.title = 'React Admin';
    }

    

    render() {
        return (
            <div className='container-fluid'>

                <div className="row">
                    <div className="col p-0">

                        <Header admin='true' />

                    </div>
                </div>

                <div className="row">
                    <div className="col d-lg-none p-0">

                        <MenuAdminTop />

                    </div>
                </div>

                <div className="row">
                    <div className="col-2 d-lg-block d-none p-0">

                        <MenuAdminLeft />

                    </div>

                    <div className="col-lg-10 p-0">

                        <MainAdmin />

                    </div>
                </div>

                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col p-0">

                            <Footer />

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}