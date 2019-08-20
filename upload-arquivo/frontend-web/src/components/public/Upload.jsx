import React from 'react';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';

export default function Upload(props){


    function renderDragMessage(isDragActive, isDragReject){

        if(!isDragActive){
            return (
                <UploadMessage>
                    Arraste imagens aqui.
                </UploadMessage>
            );
        }
        
        if(isDragReject){
            return (
                <UploadMessage type='error'>
                    Arquivo não suportado.
                </UploadMessage>
            );
        }

        return (
            <UploadMessage type='success'>
                Solte as imagens aqui.
            </UploadMessage>
        );
    }
        
    
    return (
        <Dropzone accept='image/*' onDropAccepted={props.onUpload}>

            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => {
                return (
                    <DropContainer 
                        className='dropzone'
                        {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <input {...getInputProps()} />

                        {renderDragMessage(isDragActive, isDragReject)}

                    </DropContainer>
                );
            }}

        </Dropzone>
    );
}


const DropContainer = styled.div`
    border: 1px dashed #ddd;
    border-radius: 4px;
    cursor: pointer;

    transition: height 0.2s ease;

    border-color: ${(props) => { 
        if(props.isDragActive && !props.isDragReject) return '#78e5d5';
        if(props.isDragReject) return '#e57878';
    }};
`;

const UploadMessage = styled.div`
    display: flex;
    color: ${(props) => {
        if(props.type === 'success') return '#78e5d5';
        if(props.type === 'error') return '#e57878';
        return '#999';
    }};
    justify-content: center;
    align-items: center;
    padding: 15px 0;
`;