import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Comments extends Component {

    renderComments(){

        return this.props.comments.map( (comment, index) => {

            return (
                <View key={index} style={styles.commentContainer}>

                    <Text style={styles.nickname}>
                        {comment.nickname}:
                    </Text>
                    <Text style={styles.comment}>
                        {' ' + comment.comment}
                    </Text>

                </View>
            );
        });
    }

    render() {

        return (
            <View style={styles.container}>

                {this.renderComments()}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },

    commentContainer: {
        flexDirection: 'row',
        marginTop: 5
    },

    nickname: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#444'
    },

    comment: {
        color: '#555'
    }
});