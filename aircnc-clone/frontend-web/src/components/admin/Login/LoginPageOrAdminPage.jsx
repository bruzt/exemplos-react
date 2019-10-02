import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

import { setToast } from '../../../redux/actions/toastActions';

import HomeAdmin from '../HomeAdmin';
import LoginPage from './LoginPage';

class LoginPageOrAdminPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            auth: {
                user: JSON.parse(sessionStorage.getItem('_userLogin')) || JSON.parse(localStorage.getItem('_userLogin')),
                validToken: false
            }
        }
    }

    componentDidMount(){

        if(this.state.auth.user){
            
            this.validateToken(this.state.auth.user.token);
        }
    }

    async validateToken(token) {

        if (token) {

            try {

                let response = await axios.post(`http://localhost:3001/api/validateToken`, { token });

                if (response) {

                    this.setState({ auth: { ...this.state.auth, validToken: true }});
    
                } else {
    
                    sessionStorage.removeItem('_userLogin');
                    localStorage.removeItem('_userLogin');
    
                    this.setState({ auth: { user: null, validToken: false }});
                }

            } catch (error) {
                console.error(error);
                this.props.setToast({ messages: [{ title: 'Erro', text: 'Erro interno, tente mais tarde', color: 'red' }] });
            }
        }
    }

    render(){

        if(this.state.auth.user && this.state.auth.validToken) {

            axios.defaults.headers.common['authorization'] = this.state.auth.user.token;

            return (
                <HomeAdmin />
            );

        } else if(! this.state.auth.user && ! this.state.auth.validToken) {

            return <LoginPage />

        } else {
            return false;
        }
    }
}

/////////////////////////////////////

const mapDispatchToProps = dispatch => bindActionCreators({ setToast }, dispatch);

export default connect(null, mapDispatchToProps)(LoginPageOrAdminPage);