import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

import Author from './Author';
import Comments from './Comments';
import AddComment from './AddComment';
import If from './common/If';

class Post extends Component {


    render() {
     
        return (
            <View style={styles.container}>

                <Image source={{ uri: this.props.image.url }} style={styles.image} />
                <Author email={this.props.image.user.email} nickname={this.props.image.user.name} />
                <Comments comments={this.props.image.comments} />
                <If test={(this.props.user.name)}>
                    <AddComment postId={this.props.image._id} />
                </If>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 0.75,
        resizeMode: 'contain'
    }
});

////////////////////////////////

const mapStateToProps = (state) => {

    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Post);
