import React from 'react';
import styled, { keyframes } from 'styled-components';

export default class Home extends React.Component {

    constructor(props){
        super(props);

        document.title = 'React Home';

        this.state = {
            email: '',
            password: '',
            login: false,
            showForm: true
        }
    }

    onSubmit(event){

        event.preventDefault();

        const formHide = document.querySelector('.formContainer');

        if(! (this.state.email.trim() && this.state.password.trim())){

            console.log('não');
            return;
        }

        formHide.addEventListener('animationend', (event) => {

            if(event.animationName === 'down'){

                this.setState({ showForm : false });
            }
        });

        this.setState({ login: true });

        console.log('sim');
    }

    render() {
        return (
            <Container>

                <h1 style={{ position: 'fixed', top: 50}}>ANIMAÇÕES</h1>

                {this.state.showForm && (

                    <div className={`formContainer ${(this.state.login) ? 'form-hide' : ''}`}>

                        <header>
                            Login
                        </header>

                        <form>

                            <EmailArea>

                                <label>
                                    &nbsp; e-mail
                                </label>

                                <input type='email' placeholder='Digite seu email' value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} />
                            
                            </EmailArea>

                            <PasswordArea>

                                <label>
                                    &nbsp; Senha
                                </label>

                                <input type='password' placeholder='Digite sua senha' value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />

                            </PasswordArea>

                            <ButtonArea>

                                <button type='submit' onClick={(event) => this.onSubmit(event)}>
                                    Entrar
                                </button>

                            </ButtonArea>


                        </form>

                    </div>
                )}

            </Container>
        );
    }
}

const move = keyframes`
    from {
        opacity: 0;
        transform: translateX(-35%);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const fade = keyframes`
    from {
        opacity: 0;
        transform: scale(0.9);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
`;

const down = keyframes`
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(100vh);
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: #c7e2f2;
    overflow: hidden;

    .formContainer {
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        border-radius: 10px;
        width: 300px;
        padding: 0 0 30px 0;
        background: #93b2c4;    
        overflow: hidden;
        animation: ${fade} 500ms;
    }

    .formContainer header {
            position: relative;
            top: 0;
            height: 50px;
            width: 100%;
            background: grey;
            border-radius: 10px 10px 0 0;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
    }

    .formContainer form {
            display: flex;
            flex-direction: column;
            padding: 0 30px;
    }

    .formContainer form label {
        font-size: 16px;
        font-weight: bold;
        margin: 25px 0 0 0; 
    }

    .formContainer form input {
        width: 100%;
        height: 35px;
        padding: 0 5px;
    }

    .formContainer form button {
        margin: 25px 0 0 0;
        width: 200px;
        height: 35px;
        border: 1px solid black;
        border-radius: 20px;
        background: #3a627a;
        color: white;
    }

    .form-hide {
        animation: ${down} 1s forwards;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
`;

const EmailArea = styled.div`
    animation: ${move} 500ms;
    animation-delay: 150ms;
    animation-fill-mode: backwards; 
`;

const PasswordArea = styled.div`
    animation-name: ${move};
    animation-duration: 500ms;
    animation-delay: 300ms;
    animation-fill-mode: backwards; 
`;

const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    animation: ${move} 500ms;
    animation-delay: 450ms;
    animation-fill-mode: backwards; 
`;