import React from 'react';
import styled from 'styled-components';
import { uniqueId } from 'lodash';
import fileSize from 'filesize';

import api from '../../services/api';

import Upload from './Upload';
import FileList from './FileList';

export default class Home extends React.Component {

    constructor(props){
        super(props);

        document.title = 'Upload arquivos';

        this.state = {
            uploadedFiles: []
        }
    }

    async componentDidMount(){

        try {

            const response = await api.get('/posts');

            const files = response.data.map( (file) => {
                return {
                    id: file._id,
                    name: file.name,
                    readableSize: fileSize(file.size),
                    preview: file.url,
                    uploaded: true,
                    url: file.url
                };
            });

            this.setState({ uploadedFiles: files });
            
        } catch (error) {
            console.log(error);
        }
    }

    componentWillUnmount(){

        this.state.uploadedFiles.forEach( (file) => URL.revokeObjectURL(file.preview));
    }
   
    updateFile(id, data){

        const mapFile = this.state.uploadedFiles.map( (file) => {
                           
            return (id === file.id) ? { ...file, ...data } : file;
        });

        this.setState({ uploadedFiles: mapFile });
    }

    async processUpload(file){
        
        const data = new FormData();

        data.append('file', file.file, file.name);
        //console.log(data.getAll('file'))
        console.log(file.file)
        try {
            
            const response = await api.post('/posts', data, {
                onUploadProgress: (event) => {
    
                    const progress = parseInt(Math.round((event.loaded * 100) / event.total));
                            
                    this.updateFile(file.id, { progress });
                }
            });

            this.updateFile(file.id, {
                uploaded: true,
                id: response.data._id,
                url: response.data.url
            });

        } catch (error) {
            
            this.updateFile(file.id, {
                error: true
            });
        }
    }

    handleUpload(files){

        const upFiles = files.map( (file) => {
            return {
                file,
                id: uniqueId(),
                name: file.name,
                readableSize: fileSize(file.size),
                preview: URL.createObjectURL(file),
                progress: 0,
                uploaded: false,
                error: false,
                url: null
            };
        });

        this.setState({ uploadedFiles: this.state.uploadedFiles.concat(upFiles) }, 
        () => { upFiles.forEach(this.processUpload.bind(this)) });
    }

    async handleDelete(id){

        await api.delete(`/posts/${id}`);

        this.setState({
            uploadedFiles: this.state.uploadedFiles.filter( (file) => file.id !== id)
        });
    }
    
    render(){

        return (
            <Container>
                <Content>
    
                    <Upload onUpload={this.handleUpload.bind(this)} />
    
                    { !!this.state.uploadedFiles.length && (
                        
                        <FileList files={this.state.uploadedFiles} onDelete={this.handleDelete.bind(this)} />
                        
                    )}
    
                </Content>
            </Container>
        );
    }
}

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 30px;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
`;