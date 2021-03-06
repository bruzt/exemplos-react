import React from 'react';
import styled from 'styled-components';

export default class Home extends React.Component {

    constructor(props){
        super(props);

        document.title = 'React Home';

        this.state = {
            email: '',
            password: '',
            login: false,
            showForm: true,
            invalidLogin: false
        }
    }

    componentDidMount(){

        this.eventListeners();
        this.squares();
    }

    eventListeners(){

        const formHide = document.querySelector('.formContainer');

        formHide.addEventListener('animationend', (event) => {
  
            switch (event.animationName){

                case 'down':
                    this.setState({ showForm : false });
                    break;

                case 'nono':
                    this.setState({ invalidLogin: false });
                    break;  

                default:
                    break;
            }
        });
    }

    random(min, max){

        return Math.random() * (max - min) + min;
    }

    squares(){

        const ulSquares = document.querySelector('.squares');

        for(let i=0; i<=50; i++){

            const li = document.createElement('li');

            const size = Math.floor(this.random(10, 120));
            const position = this.random(1, 90);
            const delay = this.random(0, 3);
            const duration = this.random(1, 10);

            li.style.width = `${size}px`;
            li.style.height = `${size}px`;
            li.style.bottom = `-${size}px`;

            li.style.left = `${position}%`;

            li.style.animationDelay = `${delay}s`;
            li.style.animationDuration = `${duration}s`;
            li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`;

            ulSquares.appendChild(li);
        }
    }

    onSubmit(event){

        event.preventDefault();

        if(! (this.state.email.trim() && this.state.password.trim())){

            this.setState({ invalidLogin: true });
            console.log('não');
            return;
        }

        this.setState({ login: true });

        console.log('sim');
    }

    render() {
        return (
            <Container>

                <h1 style={{ position: 'fixed', top: 25 }}>ANIMAÇÕES</h1>

                {this.state.showForm && (

                    <div className={`formContainer ${(this.state.login) ? 'form-hide' : ''} ${(this.state.invalidLogin) ? 'nono' : ''}`}>

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

                <ul className='squares'></ul>

            </Container>
        );
    }
}

const height = window.innerHeight;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    overflow: hidden;

    .formContainer {
        display: flex;
        z-index: 10;
        flex-direction: column;
        border: 1px solid black;
        border-radius: 10px;
        width: 300px;
        padding: 0 0 30px 0;
        background: #93b2c4;    
        overflow: hidden;
        animation: fade 500ms;
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
        background: purple;
        color: white;
    }

    .form-hide {
        animation: down 1s forwards;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .nono {
        animation: nono 500ms, fade paused;
    }

    .squares li {
        background-color: rgba(100,100,100,0.15);
        display: block;
        position: fixed;
        bottom: 0;
        animation: up infinite alternate;
    }

    /* KEYFRAMES */

    @keyframes move {
        from {
            opacity: 0;
            transform: translateX(-35%);
        }

        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes fade {
        from {
            opacity: 0;
            transform: scale(0.9);
        }

        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes down {
        from {
            transform: translateY(0);
        }

        to {
            transform: translateY(100vh);
        }
    }

    @keyframes nono {
        0%, 100% {
            transform: translateX(0);
        }

        33% {
            transform: translateX(-10%);
        }

        66% {
            transform: translateX(10%);
        }
    }

    @keyframes up {
        from {
            opacity: 0;
            transform: translateY(0);
        }

        50% {
            opacity: 1;
        }

        to {
            transform: translateY(-${height}px) rotate(960deg);
            opacity: 0;
        }
    }
`;

const EmailArea = styled.div`
    animation: move 500ms;
    animation-delay: 150ms;
    animation-fill-mode: backwards; 
`;

const PasswordArea = styled.div`
    animation-name: move;
    animation-duration: 500ms;
    animation-delay: 300ms;
    animation-fill-mode: backwards; 
`;

const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    animation: move 500ms;
    animation-delay: 450ms;
    animation-fill-mode: backwards; 
`;