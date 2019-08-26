import React from 'react';
import styled from 'styled-components/native';
import socketIo from 'socket.io-client';

export default class Home extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            nickname: '',
            message: '',
            messages: []
        }

        this.io();
    }

    io(){
        
        this.socket = socketIo('http://192.168.1.119:3001');

        this.socket.on('firstTime', (messages) => {
            
            this.setState({ messages });
        });

        this.socket.on('receivedMessage', (message) => {
            
            this.setState({ messages: [...this.state.messages, message] });
        });
    }

    sendMessage(){

        if(this.state.nickname && this.state.message){

            this.socket.emit('sendMessage', { nickname: this.state.nickname, message: this.state.message });

            this.setState({ message: '' });
        }
    }

    renderMessages(){
        return this.state.messages.map( (message, index) => {
            return (
                <MessageView key={index}>
                    <NickText>{message.nickname}:</NickText>
                    <MessageText>{' ' + message.message}</MessageText>
                </MessageView>
            );
        });
    }
   
    render(){

        return (
            <Container>
    
                <NickInput placeholder='Digite seu nick' onChangeText={(nickname) => this.setState({ nickname })} value={this.state.nickname} />
    
                <Chat>
                    <ChatScroll 
                        ref={(ref) => this.scrollView = ref}
                        onContentSizeChange={(contentWidth, contentHeight)=>{        
                            this.scrollView.scrollToEnd({animated: true});
                    }}>
                        {this.renderMessages()}
                    </ChatScroll>
                </Chat>
    
                <MessageInput placeholder='Digite sua mensagem' onChangeText={(message) => this.setState({ message })} value={this.state.message} />

                <SendButton onPress={() => this.sendMessage()}>
                    <ButtonText>
                        Enviar
                    </ButtonText>
                </SendButton>

            </Container>
        );
    }
}


const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 20px 10px 10px 10px;
    background-color: #7f7f87;
`;

const NickInput = styled.TextInput`
    width: 100%;
    height: 40px;
    padding: 5px;
    border: 0.33px solid #363640;
    background-color: #f5f5f5;
`;

const Chat = styled.View`
    width: 100%;
    height: 70%;
    padding: 5px;
    border: 0.33px solid #363640;
    margin: 10px 0;
`;

const ChatScroll = styled.ScrollView`
   
`;

const MessageInput = styled.TextInput`
    width: 100%;
    height: 40px;
    padding: 5px;
    border: 0.33px solid #363640;
    background-color: #f5f5f5;
`;

const SendButton = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    padding: 5px;
    justify-content: center;
    align-items: center;
    background-color: #3737bf;
    margin-top: 10px;
`;

const ButtonText = styled.Text`
    
`;

const MessageView = styled.View`
    flex-direction: row;
    padding-right: 40px;
`;

const NickText = styled.Text`
    font-weight: bold;
`;

const MessageText = styled.Text`

`;