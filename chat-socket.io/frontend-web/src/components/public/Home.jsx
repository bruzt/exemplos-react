import React from 'react';
import styled from 'styled-components';
import io from 'socket.io-client';

export default class Home extends React.Component {

    constructor(props){
        super(props);

        document.title = 'Chat';

        this.state = {
            nickname: '',
            message: '',
            messages: []
        }

        this.io();
    }

    io(){

        this.socket = io('http://localhost:3001');

        this.socket.on('firstTime', (messages) => {
            
            this.setState({ messages });

            const chat = document.getElementById('chat');
            chat.scrollTop = chat.scrollHeight;
        });

        this.socket.on('receivedMessage', (message) => {
            
            this.setState({ messages: [...this.state.messages, message] });

            const chat = document.getElementById('chat');
            chat.scrollTop = chat.scrollHeight;
        });
    }

    sendMessage(event){

        event.preventDefault();

        if(this.state.nickname && this.state.message){

            this.socket.emit('sendMessage', { nickname: this.state.nickname, message: this.state.message });

            this.setState({ message: '' });
        }

    }

    renderMessages(){
        return this.state.messages.map( (message, index) => {
            return (
                <div key={index}>
                    <strong>{message.nickname}:</strong>
                    {' ' + message.message}
                </div>
            );
        });
    }

    render() {
        return (
            <Form>
                <Nickname placeholder='Digite seu nick' onChange={(event) => this.setState({ nickname: event.target.value })} value={this.state.nickname} />
                <Chat id='chat'>
                    {this.renderMessages()}
                </Chat>
                <Message placeholder='Digite sua mensagem' onChange={(event) => this.setState({ message: event.target.value })} value={this.state.message} />
                <Button type='submit' onClick={(event) => this.sendMessage(event)}>
                    Enviar
                </Button>
            </Form>
        );
    }
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #7f7f87;
`;

const Nickname = styled.input`
    width: 50%;
    height: 30px;
    padding: 5px;
`;

const Chat = styled.div`
    width: 50%;
    height: 50%;
    margin-top: 10px;
    padding: 5px;
    border: 0.5px solid #363640;
    overflow-y: auto;
`;

const Message = styled.input`
    width: 50%;
    height: 30px;
    margin-top: 10px;
    padding: 5px;
`;

const Button = styled.button`
    width: 50%;
    height: 40px;
    margin-top: 10px;
    background-color: #3737bf;
    border: none;
`;