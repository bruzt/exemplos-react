import React, { Component } from 'react';

import api from '../../services/api';

export default class Login extends Component {

    constructor(props){
        super(props);

        document.title = 'Login';

        this.state = {
            email: ''
        }
    }

    async handleSubmit(event){

        event.preventDefault();

        const response = await api.post('/sessions', {
            email: this.state.email
        });

        const { _id } = response.data;

        localStorage.setItem('user', _id);

        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <>
                <p>
                    Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
                </p>

                <form>
                    <label htmlFor="email">E-MAIL *</label>
                    <input 
                        type="email" 
                        id='email' 
                        placeholder='Seu melhor e-mail' 
                        value={this.state.email}
                        onChange={(event) => this.setState({ email: event.target.value })}
                    />
                    <button type='submit' className='btn' onClick={(event) => this.handleSubmit(event)}>Entrar</button>
                </form>
            </>
        );
    }
}