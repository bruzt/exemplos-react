import React from 'react';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

export default function FileList(props) {


    function renderFiles(){

        return props.files.map((file, index) => {
            return (
                <li key={index}>
                    <FileInfo>
                        <Preview src={file.preview} />
                        <div>
                            <strong>{file.name}</strong>
                            <span>
                                {file.readableSize}

                                {(!!file.url) && (
                                    <button onClick={() => { props.onDelete(file.id)}}>
                                        Excluir
                                    </button>
                                )}
                            </span>
                        </div>
                    </FileInfo>
                    <div>
                        
                        {(!file.uploaded && !file.error) && (
                            <CircularProgressbar 
                                styles={{ root: { width: 24 }, path: { stroke: '#7159c1' }}}
                                strokeWidth={10}
                                value={file.progress}
                            />
                        )}

                        {(file.url) && (
                            <a 
                                href={file.url}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <LinkIcon size={24} color='#222' />
                            </a>
                        )}

                        {(file.uploaded) && (<CheckCircleIcon size={24} color='#78e5d5' />)}

                        {(file.error) && (<ErrorIcon size={24} color='#e57878'  />)}

                    </div>
                </li>
            );
        })
    }


    return (
        <Container>
            <ul>
                {renderFiles()}
            </ul>
        </Container>
    );
}

const Container = styled.div`
    margin-top: 20px;
    
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #444;
        
        & + li { /* igonora o primeiro li */
            margin-top: 15px;
        }
    }
`;

const FileInfo = styled.div`
    display: flex;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
    }

    span {
        font-size: 12px;
        color: #999;
        margin-top: 5px;

        button {
            border: 0;
            background: transparent;
            color: #e57878;
            margin-left: 5px;
            cursor: pointer;
        }
    }
`;

const Preview = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 5px;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    margin-right: 10px;
`;

const LinkIcon = styled(MdLink)`
    margin-right: 8px;
`;

const CheckCircleIcon = styled(MdCheckCircle)`
    
`;

const ErrorIcon = styled(MdError)`

`;