import React from 'react';
import styled from 'styled-components/native';

export default function first(props){

    
    return (
        <Container>

            <Text>
                Stack Screen
                {'\n' + props.navigation.state.params.data}
            </Text>

        </Container>
    );
}


const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Text = styled.Text`

`;