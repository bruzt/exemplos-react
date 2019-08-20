import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Tabs(props) {

    return (
        <Container
            style={{
                transform: [{
                    translateY: props.translateY.interpolate({
                        inputRange: [0, 350],
                        outputRange: [0, 50],
                        extrapolate: 'clamp'
                    })
                }],
                opacity: props.translateY.interpolate({
                    inputRange: [0, 100],
                    outputRange: [1.1, 0.3],
                    extrapolate: 'clamp'
                })
            }}
        >
            <TabsContainer 
                contentContainerStyle={{ paddingLeft: 10, paddingRight: 20 }} 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <TabItem>
                    <Icon name='person-add' size={24} color='#FFF' />
                    <TabText>
                        Indicar Amigos
                    </TabText>
                </TabItem>

                <TabItem>
                    <Icon name='chat-bubble-outline' size={24} color='#FFF' />
                    <TabText>
                        Cobrar
                    </TabText>
                </TabItem>

                <TabItem>
                    <Icon name='arrow-downward' size={24} color='#FFF' />
                    <TabText>
                        Depositar
                    </TabText>
                </TabItem>

                <TabItem>
                    <Icon name='arrow-upward' size={24} color='#FFF' />
                    <TabText>
                        Transferir
                    </TabText>
                </TabItem>

                <TabItem>
                    <Icon name='lock' size={24} color='#FFF' />
                    <TabText>
                        Bloquear Cartão
                    </TabText>
                </TabItem>

            </TabsContainer>
        </Container>
    );
}

const Container = styled(Animated.View)`
    height: 100px;
    margin: 20px 0 20px;

`;

const TabsContainer = styled.ScrollView`
    
`;

const TabItem = styled.View`
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    margin-left: 10px;
    padding: 10px;
    justify-content: space-between;
`;

const TabText = styled.Text`
    font-size: 13px;
    color: #FFF;
`;