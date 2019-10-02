import React, { Component } from "react";
import OlMap from "ol/Map";
import OlView from "ol/View";
import OlFeature from "ol/Feature";
import OlGeomPoint from "ol/geom/Point";
import OlLayerTile from "ol/layer/Tile";
import OlLayerVector from "ol/layer/Vector";
import OlSourceOSM from "ol/source/OSM";
import OlSourceVector from "ol/source/Vector";
import { fromLonLat } from 'ol/proj';
import styled from 'styled-components';

export default class PublicMap extends Component {
    constructor(props) {
        super(props);

        document.title = 'Mapa';        

        this.state = { 
            center: fromLonLat([-47.457174, -22.481209]), 
            zoom: 18
        };

        this.olmap = new OlMap({
            target: null,
            layers: [
                new OlLayerTile({
                    source: new OlSourceOSM()
                })
            ],
            view: new OlView({
                center: this.state.center,
                zoom: this.state.zoom
            })
        });
    }

    updateMap() {
        this.olmap.getView().setCenter(this.state.center);
        this.olmap.getView().setZoom(this.state.zoom);
    }

    componentDidMount() {
        this.olmap.setTarget("map");
    
        // Marker
        let marker = new OlLayerVector({
            source: new OlSourceVector({
                features: [
                    new OlFeature({
                        geometry: new OlGeomPoint(fromLonLat([-47.457174, -22.481209])),
                    })
                ]
            })
        });
        this.olmap.addLayer(marker);

        // Listen to map changes
        this.olmap.on("moveend", () => {
            let center = this.olmap.getView().getCenter();
            let zoom = this.olmap.getView().getZoom();
            this.setState({ center, zoom });
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        let center = this.olmap.getView().getCenter();
        let zoom = this.olmap.getView().getZoom();
        if (center === nextState.center && zoom === nextState.zoom) return false;
        return true;
    }

    userAction() {
        this.setState({ center: fromLonLat([-47.457174, -22.481209]), zoom: 18 });
    }

    render() {
        this.updateMap(); // Update map on render?
        return (
            <Container>
                <Map id="map">
                    {/*<button onClick={e => this.userAction()}>setState on click</button>*/}
                </Map>
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const Map = styled.div`
    width: 50%;
    height: 75%;
`;