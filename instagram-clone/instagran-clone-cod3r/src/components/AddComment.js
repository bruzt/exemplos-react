import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { addComment as onAddComment } from '../redux/action_creators/posts';

class AddComment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comment: '',
            editMode: false
        }
    }

    handleAddComment(){

        this.props.onAddComment({ postId: this.props.postId, comment: { nickname: this.props.user.name, comment: this.state.comment }});

        this.setState({ comment: '', editMode: false });
    }

    render() {

        let commentArea = null;

        if(this.state.editMode){

            commentArea = (
                <View style={styles.container}>
                    
                    <TextInput 
                        placeholder='Pode comentar...'
                        style={styles.input}
                        value={this.state.comment}
                        autoFocus={true}
                        onChangeText={(comment) => this.setState({ comment })}
                        onSubmitEditing={() => this.handleAddComment()}
                    />
                    <TouchableWithoutFeedback onPress={() => this.setState({ editMode: false })}>
                        <Icon name='times' size={15} color='#555' />
                    </TouchableWithoutFeedback>

                </View>
            );

        } else {

            commentArea = (
                <TouchableWithoutFeedback onPress={() => this.setState({ editMode: true })}>

                    <View style={styles.container}>

                        <Icon name='comment-o' size={25} color='#555' />
                        <Text style={styles.caption}>
                            Adicione um comentário
                        </Text>

                    </View>

                </TouchableWithoutFeedback>
            );
        }

        return (
            <View style={{ flex: 1 }}>

                {commentArea}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },

    input: {
        width: '90%'
    },

    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#CCC'
    }
});

///////////////////////////////////////

const mapStateToProps = (state) => {

    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({ onAddComment }, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(AddComment);