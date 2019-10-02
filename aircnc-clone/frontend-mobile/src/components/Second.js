import React from 'react';
import styled from 'styled-components/native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';

import { setMessage } from '../redux/actions/messageActions';

const deviceWidth = Dimensions.get('window').width;

function second(props){

    
    return (
        <Container>

            <AlertButton onPress={() => props.setMessage({ title: 'Alerta', text: 'Algo aconteceu' })}>
                <Text>Alerta</Text>
            </AlertButton>

        </Container>
    );
}


const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: ${deviceWidth};
`;

const AlertButton = styled.TouchableOpacity`
    border: 1px;
    background: red;
    color: white;
    padding: 10px;
    margin-top: 10px;
`;

const Text = styled.Text`
    font-size: 20;
`;

///////////////////////////

const mapDispatchToProps = (dispatch) => bindActionCreators({ setMessage }, dispatch);

export default connect(null, mapDispatchToProps)(second);