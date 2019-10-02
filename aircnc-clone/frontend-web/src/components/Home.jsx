import React from 'react';
import styled from 'styled-components';

import Routes from '../main/Routes';

import logo from '../assets/img/logo.svg';

export default class Login extends React.Component {

    render() {
        return (
            <Container>

                <img src={logo} alt="logo"/>

                <Content>

                    <Routes />
                    
                </Content>

                

            </Container>
        );
    }
}

const Container = styled.div`
    margin: 80px auto 0;
    max-width: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Content = styled.div`
    width: 100%;
    background: #FFF;
    margin: 50px 0;
    border-radius: 4px;
    padding: 30px;

    > p {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 30px;
    }

    form {
        display: flex;
        flex-direction: column;

        label {
            font-size: 14px;
            color: #444;
            font-weight: bold;
            margin-bottom: 8px;

            span {
                font-weight: normal;
                color: #999;
                font-size: 12px;
            }
        }

        input {
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 2px;
            height: 45px;
            padding: 0 15px;
            font-size: 16px;
        }
    }

    button.btn {
        border: 0;
        border-radius: 2px;
        width: 100%;
        height: 42px;
        padding: 0 20px;
        font-size: 16px;
        font-weight: bold;
        background: #f05a5b;
        color: #fff;
        cursor: pointer;

        :hover {
            background: #e14f50;
        }
    }

    .has-thumbnail {
        border: 0;

        img {
            display: none;
        }
    }
`;