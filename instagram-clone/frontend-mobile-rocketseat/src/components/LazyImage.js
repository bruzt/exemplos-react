import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

export default class LazyImage extends React.Component{

    constructor(props){
        super(props);

        this.opacity = new Animated.Value(0);

        this.state = {
            loaded: false,
        }
    }

    componentDidUpdate(prevProps){

        if(prevProps.shouldLoad !== this.props.shouldLoad){

            if(this.props.shouldLoad){

                //setTimeout( () => {
        
                this.setState({ loaded: true });
        
                //}, 250);
            }
        }
    }

    handleAnimate(){

        Animated.timing(this.opacity, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true
        }).start();
    }

    render(){

        return (
            <Small 
                source={this.props.smallSource} 
                ratio={this.props.aspectRatio} 
                resizeMode='contain' 
                blurRadius={1}
            >
                {(this.state.loaded) && (
                    <AnimatedOriginal 
                        style={{ opacity: this.opacity }}
                        source={this.props.source} 
                        ratio={this.props.aspectRatio} 
                        resizeMode='contain' 
                        onLoadEnd={() => this.handleAnimate()}
                    />
                )}
            </Small>
      );
    }
}

const Small = styled.ImageBackground`
    width: 100%;
    aspect-ratio: ${(props) => props.ratio};
`;

const Original = styled.Image`
    width: 100%;
    aspect-ratio: ${(props) => props.ratio};
`;

const AnimatedOriginal = Animated.createAnimatedComponent(Original);