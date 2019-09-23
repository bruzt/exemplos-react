import React from 'react';

export default class PageTopButton extends React.Component {

    render(){
        return (
            <div className="btnSubir">
                <div className="col-3 btnSubirDiv">
                    <a href='#topo' className="btnSubirBtn scroll-page">
                        <i className="fa fa-arrow-circle-up" />
                    </a>
                </div>
            </div>
        );
    }
}