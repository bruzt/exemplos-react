import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export default function third(props){

    
    return (
        <Container>

            <StackMenuButton onPress={() => props.navigation.navigate('StackScreen', { data: 'dados da rota' })}>
                <Text>Stack menu</Text>
            </StackMenuButton>

        </Container>
    );
}


const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: ${deviceWidth};
`;

const StackMenuButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: #232ccf;
`;

const Text = styled.Text`
    color: white;
`;