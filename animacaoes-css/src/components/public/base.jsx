import React from 'react';
import styled from 'styled-components';

export default class Home extends React.Component {

    constructor(props){
        super(props);

        document.title = 'React Home';

        this.state = {
            email: '',
            password: ''
        }
    }

    onSubmit(event){

        event.preventDefault();

        if(! (this.state.email.trim() && this.state.password.trim())){

            console.log('não');
            return;
        }

        console.log('sim');
    }

    render() {
        return (
            <Container>

                <LoginContainer>

                    <LoginHeader>
                        Login
                    </LoginHeader>

                    <FormContainer>

                        <Label>
                            &nbsp; e-mail
                        </Label>

                        <Input type='email' placeholder='Digite seu email' value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} />

                        <Label>
                            &nbsp; Senha
                        </Label>

                        <Input type='password' placeholder='Digite sua senha' value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />

                        <LoginButton type='submit' onClick={(event) => this.onSubmit(event)}>
                            Entrar
                        </LoginButton>

                    </FormContainer>

                </LoginContainer>

            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: #c7e2f2;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 10px;
    width: 300px;
    padding: 0 0 30px 0;
    background: #93b2c4;    
`;

const LoginHeader = styled.header`
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
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 30px;
`;

const Label = styled.label`
    font-size: 16px;
    font-weight: bold;
    margin: 30px 0 0 0; 
`;

const Input = styled.input`
    width: 100%;
    height: 35px;
    padding: 0 5px;
`;

const LoginButton = styled.button`
    margin: 30px 0 0 0;
    width: 200px;
    height: 35px;
    border: 1px solid black;
    border-radius: 20px;
    background: #3a627a;
    color: white;
    align-self: center;
`;