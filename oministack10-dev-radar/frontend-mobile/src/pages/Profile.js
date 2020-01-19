import React from 'react';
import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';

export default function Profile(props) {

    const githubUsername = props.navigation.getParam('github_username');

    return (
        <WebContainer
            source={{ uri: `https://github.com/${githubUsername}` }}
        />
    );
}

const WebContainer = styled(WebView)`
    flex: 1;
`;