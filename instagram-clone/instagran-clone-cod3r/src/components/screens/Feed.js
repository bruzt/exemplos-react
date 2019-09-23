import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, StyleSheet, FlatList } from 'react-native';
import styled from 'styled-components';

import { fetchPosts as onFetchPosts } from '../../redux/action_creators/posts';

import Header from '../header';
import Post from '../Post';

class Feed extends Component {

    constructor(props){
        super(props);

        this.state = {
            refreshing: false,
            loading: false
        }

        this.props.onFetchPosts();
    }

    async refresh(){

        this.setState({ refreshing: true });

        await this.props.onFetchPosts(true);

        this.setState({ refreshing: false });
    }

    async pageUp(){

        this.setState({ loading: true });

        await this.props.onFetchPosts();

        this.setState({ loading: false });
    }

    render() {
        
        return (
            <View style={styles.container}>

                <Header />
                <FlatList 
                    data={this.props.posts.posts}
                    keyExtractor={(item) => item._id.toString()}
                    renderItem={({ item }) => <Post key={item._id} image={item} />}
                    onRefresh={() => this.refresh()}
                    refreshing={this.state.refreshing}
                    ListFooterComponent={(this.state.loading) && <Loading size='small' color='#999' />}
                    onEndReached={() => this.pageUp()}
                    onEndReachedThreshold={0.1}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});

const Loading = styled.ActivityIndicator`
    margin: 30px 0;
`;

/////////////////////////////////////////

const mapStateToProps = (state) => {

    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return bindActionCreators({ onFetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);