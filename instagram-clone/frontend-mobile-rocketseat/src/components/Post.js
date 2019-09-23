import React from 'react';
import styled from 'styled-components/native';

import LazyImage from './LazyImage';

export default function Post({ data, shouldLoad }) {

    return (
        <PostContainer>
            <Header>
                <Avatar source={{ uri: data.item.author.avatar }} />
                <Name>{data.item.author.name}</Name>
            </Header>

            <LazyImage
                shouldLoad={shouldLoad}
                aspectRatio={data.item.aspectRatio} 
                source={{ uri: data.item.image }} 
                smallSource={{ uri: data.item.small }}
            />

            <Description>
                <Name>{data.item.author.name}</Name>
                {' ' + data.item.description}
            </Description>
        </PostContainer>
    );
}

const PostContainer = styled.View`
    margin-top: 10px;
`;

const Header = styled.View`
    padding: 15px;
    flex-direction: row;
    align-items: center;
`;

const Avatar = styled.Image`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    margin-right: 10px;
`;

const Name = styled.Text`
    color: #333;
    font-weight: bold;
`;

const PostImage = styled.Image`
    width: 100%;
    aspect-ratio: ${(props) => props.ratio};
`;

const Description = styled.Text`
    padding: 15px;
    line-height: 18px;
`;
