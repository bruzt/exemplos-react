import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, TextInput, Image, Dimensions, Platform, ScrollView, Alert, Modal } from 'react-native';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { addPost as onAddPost } from '../../redux/action_creators/posts';

class AddPhotos extends Component {

    constructor(props) {
        super(props);

        this.noUser = 'Você precisa estar logado para adicionar uma foto!';

        this.state = {
            image: {
                uri: null
            },
            base64: null,
            comment: '',
            modalVisible: false
        }
    }

    componentDidMount() {

        this.getIosPermissionAsync();
    }

    componentDidUpdate(prevProps){

        if(prevProps.loading && !this.props.loading){
            
            this.setState({
                image: null,
                comment: ''
            });

            this.props.navigation.navigate('Feed');
        }
    }

    async getIosPermissionAsync() {

        if (Constants.platform.ios) {

            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

            if (status !== 'granted') {

                alert('Desculpe, precisamos da permissão para acessar o camera roll');
            }
        }
    }

    async pickImage(mode) {

        this.setState({ modalVisible: false });
        
        /*if(! this.props.user.name){

            this.setState({ modalVisible: false });

            Alert.alert('Falha!', this.noUser);

            return;
        }*/

        let result = null;

        if(mode === 'camera'){

            result = await ImagePicker.launchCameraAsync({
                aspect: [4, 3],
                quality: 0.3,
                base64: true
            });

        } else if(mode === 'device'){

            result = await ImagePicker.launchImageLibraryAsync({
    
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                //allowsEditing: true,
                aspect: [4, 3],
                base64: true
            });
        }

        if (!result.cancelled) {

            // ImagePicker saves the taken photo to disk and returns a local URI to it
            let localUri = result.uri;
            let filename = localUri.split('/').pop();

            // Infer the type of the image
            let match = /\.(\w+)$/.exec(filename);
            let type = match ? `image/${match[1]}` : `image`;

            this.setState({ image: { uri: localUri, name: filename, type }});
        }
    }

    save(){

        /*if(! this.props.user.name){

            Alert.alert('Falha!', this.noUser);
            
            return;
        }*/
        
        this.props.onAddPost({

            id: Math.random(),
            nickname: this.props.user.name,
            email: this.props.user.email,
            image: this.state.image,
            comments: [{
                nickname: this.props.user.name,
                comment: this.state.comment
            }]
        });

        //this.setState({ image: null, comment: '' });
        //this.props.navigation.navigate('Feed');
    }

    render() {
        
        return (
            <View>
                <Modal 
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.setState({ modalVisible: false })}
                >
                    <TouchableWithoutFeedback onPress={() => this.setState({ modalVisible: false })}>
                        <View style={styles.offset} />
                    </TouchableWithoutFeedback>
                    
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.button} onPress={() => this.pickImage('device')}>
                            <Text style={styles.buttonText}>Dispositivo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => this.pickImage('camera')}>
                            <Text style={styles.buttonText}>Camera</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableWithoutFeedback onPress={() => this.setState({ modalVisible: false })}>
                        <View style={styles.offset} />
                    </TouchableWithoutFeedback>
                </Modal>

                <ScrollView>
                    <View style={styles.container}>

                        <Text style={styles.title}>
                            Compartilhe uma imagem
                        </Text>
                        <View style={styles.imageContainer}>
                            
                            <Image source={{ uri: this.state.image.uri }} style={styles.image} />

                        </View>

                        <TouchableOpacity onPress={() => this.setState({ modalVisible: true })} style={styles.button}>
                            <Text style={styles.buttonText}>
                                Escolha a foto
                            </Text>
                        </TouchableOpacity>
                        <TextInput 
                            placeholder='Comente a foto' 
                            editable={(this.props.user.name) ? true : false}
                            value={this.state.comment} 
                            style={styles.input}
                            onChangeText={(comment) => this.setState({ comment })}
                        />
                        <TouchableOpacity onPress={() => this.save()} disabled={this.props.loading} style={[styles.button, (this.props.loading) ? styles.buttonDisabled : null]}>
                            <Text style={styles.buttonText}>
                                Salvar
                            </Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    title: {
        fontSize: 20,
        marginTop: 30,
        fontWeight: 'bold'
    },

    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#EEE',
        marginTop: 10
    },

    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center'
    },

    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },

    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },

    buttonDisabled: {
        backgroundColor: '#AAA'
    },

    input: {
        marginTop: 20,
        width: '90%'
    },
    
    offset: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    }
});

////////////////////////////////////////

const mapStateToProps = (state) => {

    return {
        user: state.user,
        loading: state.posts.isUploading
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return bindActionCreators({ onAddPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhotos);