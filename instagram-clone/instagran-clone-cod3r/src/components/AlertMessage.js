import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Alert } from 'react-native';

import { setMessage as clearMessage } from '../redux/action_creators/message';

class AlertMessage extends Component {

    alert(){
        
        if(this.props.message.text.trim()){

            Alert.alert(this.props.message.title || 'Mensagem', this.props.message.text);

            this.props.clearMessage({ title: '', text: '' });
        }
    }

    render() {
        return (
            <View>
                {this.alert()}
            </View>
        );
    }
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
