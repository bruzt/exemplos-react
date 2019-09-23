import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Alert } from 'react-native';

import { setMessage as clearMessage } from '../../redux/actions/messageActions';

function AlertMessage(props){


    function alert(){
        
        if(props.message.text.trim()){

            Alert.alert(props.message.title || 'Mensagem', props.message.text);

            props.clearMessage({ title: '', text: '' });
        }
    }

   
    return (
        <React.Fragment>
            {alert()}
        </React.Fragment>
    );
}

////////////////////////////////

const mapStateToProps = (state) => {

    return {
        message: state.message
    }
}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({ clearMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertMessage);