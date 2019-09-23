import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import { createUser as onCreateUser } from '../../redux/action_creators/user';

class Register extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    componentDidUpdate(prevProps){

        if(prevProps.user.isLoading && ! this.props.user.isLoading){ // quando isLoading passar de true para false

            this.setState({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

            this.props.navigation.navigate('Profile');
        }
    }

    render() {

        const isValid = (this.state.name.trim().length > 0 && this.state.email.includes('@') && this.state.password.trim().length >= 6 && this.state.password === this.state.confirmPassword);

        return (
            <View style={styles.container}>

                <TextInput 
                    style={styles.input} 
                    placeholder=' nome' 
                    autoFocus={true}
                    value={this.state.name}
                    onChangeText={(name) => this.setState({ name })}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder=' email' 
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder=' senha' 
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder=' confirme a senha' 
                    secureTextEntry={true}
                    value={this.state.confirmPassword}
                    onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                />

                <TouchableOpacity onPress={() => this.props.onCreateUser(this.state)} disabled={! isValid} style={[styles.button, (! isValid) ? { backgroundColor: '#AAA'} : null]}>
                    <Text style={styles.buttonText}>
                        Salvar
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
        borderColor: '#333',
        paddingLeft: 15
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

/////////////////////////////////

const mapStateToProps = (state) => {

    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({ onCreateUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);