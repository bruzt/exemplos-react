import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { login as onLogin } from '../../redux/action_creators/user';

class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: 'Temporario',
            email: '',
            password: ''
        }
    }

    componentDidUpdate(prevProps){

        if(prevProps.user.isLoading && ! this.props.user.isLoading){

            this.props.navigation.navigate('Profile');
        }
    }

    login(){

        this.props.onLogin({ ...this.state });
    }

    render() {
        return (
            <View style={styles.container}>

                <TextInput 
                    placeholder=' email' 
                    style={styles.input} 
                    autoFocus={true} 
                    keyboardType='email-address' 
                    value={this.state.email} 
                    onChangeText={(email) => this.setState({ email })} 
                />
                <TextInput 
                    placeholder=' senha' 
                    style={styles.input} 
                    secureTextEntry={true}
                    value={this.state.password} 
                    onChangeText={(password) => this.setState({ password })} 
                />
                <TouchableOpacity onPress={() => this.login()} style={styles.button}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')} style={styles.button}>
                    <Text style={styles.buttonText}>
                        Criar nova conta
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333'
    },

    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },

    buttonText: {
        fontSize: 20,
        color: '#FFF'
    }
});

//////////////////////////////////

const mapStateToProps = (state) => {

    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({ onLogin }, dispatch);

    /*return {
        onLogin: (user) => {
            return dispatch(login(user));
        }
    }*/
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
