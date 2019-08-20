import React from 'react';
import { Platform, Animated } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from './Header';
import Menu from './Menu';
import Tabs from './Tabs';

export default function App() {

    let offset = 0;
    const translateY = new Animated.Value(0);

    const animatedEvent = Animated.event([{ 

            nativeEvent: { translationY: translateY }

        }], { useNativeDriver: true });

    function onHandlerStateChange(event){

        if(event.nativeEvent.oldState === State.ACTIVE){

            let opened = false;
            const { translationY } = event.nativeEvent;

            offset += translationY;

            if(translationY >= 50) {

                opened = true;
                
            } else {

                translateY.setValue(offset);
                translateY.setOffset(0);
                offset = 0;
            }
            
            Animated.timing(translateY, {
                toValue: (opened) ? 350 : 0,
                duration: 300,
                useNativeDriver: true
            })
            .start( () => {
                offset = (opened) ? 350 : 0;
                translateY.setOffset(offset);
                translateY.setValue(0);
            });
        }
    }
    
    return (
        <Container>

            <Header />
            
            <MainContent>

                <Menu translateY={translateY} />

                <PanGestureHandler
                    onGestureEvent={animatedEvent}
                    onHandlerStateChange={onHandlerStateChange}
                >
                    <Card 
                        style={
                            { 
                                transform: [{ 
                                    translateY: translateY.interpolate({ 
                                        inputRange: [-350, 0, 350],
                                        outputRange: [-50, 0, 350],
                                        extrapolate: 'clamp'
                                    }) 
                                }]
                            }
                        }
                    >
                        <CardHeader>
                            <Icon name='attach-money' size={28} color='#666' />
                            <Icon name='visibility-off' size={28} color='#666' />
                        </CardHeader>
                        <CardContent>
                            <Title>
                                Saldo Disponivel
                            </Title>
                            <Description>
                                R$ 725.841,25
                            </Description>
                        </CardContent>
                        <CardFooter>
                            <Annotation>
                                Trasferencia de R$ 600.000,00 recebide de Bill Gates hoje as 19:54h.
                            </Annotation>
                        </CardFooter>
                    </Card>
                </PanGestureHandler>

            </MainContent>  
            
            <Tabs translateY={translateY} />

        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    background: #8B10AE;
    padding-top: ${(Platform.OS === 'ios' ? '25px' : '10px')};
    justify-content: center;
`;

const MainContent = styled.View`
    flex: 1;
    max-height: 400px;
    z-index: 5;
`;

const Card = styled(Animated.View)`
    flex: 1;
    background: #FFF;
    border-radius: 4px;
    margin: 0 20px;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0px;
`;

const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`;

const CardContent = styled.View`
    flex: 1;
    padding: 0 30px;
    justify-content: center;
`;

const CardFooter = styled.View`
    padding: 30px;
    background: #eee;
    border-radius: 4px;
`;

const Title = styled.Text`
    font-size: 13px;
    color: #999;
`;

const Description = styled.Text`
    font-size: 32px;
    margin-top: 3px;
    color: #333;
`;

const Annotation = styled.Text`
    font-size: 12px;
    color: #333;
`;