import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

import { setToast } from '../../../redux/actions/toastActions';

import LoginPageOrAdminPage from './LoginPageOrAdminPage';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import If from '../../common/If';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        document.title = 'React Login';

        this.state = { 
            user: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            
            validToken: false,
            loginMode: true,
            keepConnected: false,
            errors: []
        }
    }
     
    handleSubmit(event) {

        event.preventDefault();

        const user = { ...this.state.user, password: ''};

        this.setState({ user, errors: [] });

        (this.state.loginMode) ? this.login() : this.signup();
    }

    renderErrors(){

        return this.state.errors.map( (error, index) => {
            return (
                <div className="alert alert-danger" role="alert" key={index}>
                    {error}
                </div>
            );
        });
    }

    login() {
        
        return this.submit(`http://localhost:3001/api/auth`);

    }
    
    signup() {
    
        return this.submit(`http://localhost:3001/api/user`);
    }

    async submit(url) {

        try {

            let response = await axios.post(url, this.state.user);

            if(this.state.keepConnected){

                localStorage.setItem('_userLogin', JSON.stringify(response.data));

            } else {

                sessionStorage.setItem('_userLogin', JSON.stringify(response.data));
            }

            //window.location.reload();

            this.setState({ validToken: true });
            
        } catch (error) {
            console.error(error);
            error.response.data.errors.forEach( (message) => {
                this.props.setToast({ messages: [{ title: 'Erro', text: message, color: 'red' }] });
            });
        }
    }

    changeMode() {

        this.setState({ ...this.state, loginMode: !this.state.loginMode });
    }

    render(){
        
        if(this.state.validToken){

            return (<LoginPageOrAdminPage />);

        } else {

            return (
                <div id='home-login'>
                   
                    <Header id='header-login' />

                    <div className="container col-xl-4 col-lg-6 col-md-8 col-sm-10 col-xs-12" id="main-login">
                        <div className="card card-login card mt-5 mb-5">
                            <div className="card-header">Login</div>
                            <div className="card-body">
                                <form onSubmit={(event) => this.handleSubmit(event)}>
                                    <If test={(this.state.errors.length > 0)}>
                                        {this.renderErrors()}
                                    </If>
                                    <If test={! this.state.loginMode}>
                                        <div className="form-group">
                                            <label htmlFor="name">Nome</label>
                                            <input type="text" className='form-control' value={this.state.user.name} onChange={(event) => this.setState({ ...this.state, user: { ...this.state.user, name: event.target.value}})} placeholder='Insira seu nome' />
                                        </div>
                                    </If>
                                    <div className="form-group">
                                        <label htmlFor="email">E-mail</label>
                                        <input type="email" className='form-control' value={this.state.user.email} onChange={(event) => this.setState({ ...this.state, user: { ...this.state.user, email: event.target.value}})} placeholder='Insira seu e-mail' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Senha</label>
                                        <input type="password" className='form-control' value={this.state.user.password} onChange={(event) => this.setState({ ...this.state, user: { ...this.state.user, password: event.target.value}})} placeholder='Insira sua senha' />
                                    </div>
                                    <If test={! this.state.loginMode}>
                                        <div className="form-group">
                                            <label htmlFor="confirmPassword">Confirme a senha</label>
                                            <input type="password" className='form-control' value={this.state.user.confirmPassword} onChange={(event) => this.setState({ ...this.state, user: { ...this.state.user, confirmPassword: event.target.value}})} placeholder='Confirme sua senha' />
                                        </div>
                                    </If>
                                    
                                    <If test={this.state.loginMode}>
                                        <div className="form-group">
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className='custom-control-input' name='keepConnected' id='switchKeepConnected' onChange={(event) => this.handleChange(event)} />
                                                <label htmlFor='switchKeepConnected' className='custom-control-label'>Manter conectado</label>
                                            </div>
                                        </div>
                                    </If>
                                    <button type="submit" className="btn btn-primary btn-flat">
                                        {this.state.loginMode ? 'Entrar' : 'Registrar'}
                                    </button>
                                </form>
                                {/*
                                <br />
                                <a onClick={() => this.changeMode()}>
                                    {this.state.loginMode ? 'Novo usuário? Registrar aqui!' : 'Já é cadastrado? Entrar aqui!'}
                                </a>
                                */}
                            </div>
                        </div>
                    </div>

                    <div className='container-fluid'>
                        <div className="row">
                            <div className="col p-0">

                                <Footer id='footer-login' />
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            );
        }

        /*
        return (
            <React.Fragment>
            
                {/*<div className="login-box">
                    <div className="login-logo"><b> My</b> Money</div>
                    <div className="login-box-body">
                        <p className="login-box-msg">Bem vindo!</p>
                        <form onSubmit={(values) => this.onSubmit(values)}>
                            <InputAuth 
                                type="input" 
                                name="name"
                                placeholder="Nome" 
                                icon='user' 
                                hide={this.state.loginMode} 
                            />
                            <InputAuth 
                                type="email" 
                                name="email"
                                placeholder="E-mail" 
                                icon='envelope' 
                            />
                            <InputAuth 
                                type="password" 
                                name="password"
                                placeholder="Senha" 
                                icon='lock' 
                            />
                            <InputAuth 
                                type="password" 
                                name="confirm_password"
                                placeholder="Confirmar Senha" 
                                icon='lock' 
                                hide={this.state.loginMode} 
                            />
                            <div className='row'>
                                <div className="col-xs-4">
                                    <button 
                                        type="submit"
                                        className="btn btn-primary btn-block btn-flat"
                                    >
                                        {this.state.loginMode ? 'Entrar' : 'Registrar'}
                                    </button>
                                </div>
                            </div>
                        </form>
                        {/*<br />
                        <a onClick={() => this.changeMode()}>
                            {this.state.loginMode ? 'Novo usuário? Registrar aqui!' : 'Já é cadastrado? Entrar aqui!'}
                        </a>
                    </div>
                </div>

            </React.Fragment>
        );*/
    }
}

/////////////////////////////////////

const mapDispatchToProps = dispatch => bindActionCreators({ setToast }, dispatch);

export default connect(null, mapDispatchToProps)(LoginPage);