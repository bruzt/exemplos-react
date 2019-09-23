import React from 'react';

import './Index.css';

import PageTopButton from './template/PageTopButton';
import HeaderAndNavbar from './template/HeaderAndNavbar';
import CarouselSlide from './template/CarouselSlide';
import ServicesSection from './template/ServicesSection';
import PartinersSection from './template/PartinersSection';
import ParallaxSection from './template/ParallaxSection';
import LecturesSection from './template/LecturesSection';
import Footer from './template/Footer';
import SocialMediaFooter from './template/SocialMediaFooter';

export default class Index extends React.Component {

    componentWillMount(){

        document.title = 'One Page';
    }

    componentDidMount(){

        window.$('.scroll-page').click(function(){

            window.$('html, body').animate({
                scrollTop: window.$(window.$.attr(this, 'href')).offset().top
            }, 500);
        });
    }

    render(){
        return (
            <React.Fragment>

                <PageTopButton />

                <HeaderAndNavbar />
                
                <CarouselSlide />

                <ServicesSection />
                
                <PartinersSection />

                <ParallaxSection />

                <LecturesSection />

                <Footer />
                
                <SocialMediaFooter />

            </React.Fragment>
        );
    }
}