import React, { useCallback } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import { setMessage } from '../redux/actions/messageActions';

import Post from './Post';

class Feed extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            feed: [],
            page: 1,
            totalPages: 0,
            loading: false,
            refreshing: false,
            changed: []
        }

        this.handleViewableChanged = this.handleViewableChanged.bind(this);
    }

    componentDidMount(){

        this.loadPage();
    }

    async loadPage(pageNumber = this.state.page, shouldRefresh = false){

        if(this.state.totalPages && pageNumber > this.state.totalPages) return;

        this.setState({ loading: true, page: pageNumber + 1 });
        
        try {

            const response = await fetch(`http://192.168.1.119:3001/feed?_expand=author&_limit=5&_page=${pageNumber}`);
            const data = await response.json();

            const feed = (shouldRefresh) ? data : [ ...this.state.feed, ...data ];

            const totalPages = Math.floor(response.headers.get('X-Total-Count') / 5);
            
            this.setState({ feed, totalPages, loading: false  });

        } catch (error) {
            this.setState({ loading: false, page: pageNumber - 1 });
            console.log(error);
        }
    }

    async refreshList(){
        
        this.setState({ refreshing: true });
        
        await this.loadPage(1, true);
        
        this.setState({ refreshing: false });
    }

    handleViewableChanged({ changed }){

        this.setState({ changed: changed.map( ({ item }) => item.id )});
    }

    render(){
        return (
            <Container>
                <FlatListFeed
                    data={this.state.feed}
                    keyExtractor={(post) => post.id.toString()}
                    onEndReached={() => this.loadPage()}
                    onEndReachedThreshold={0.1}
                    onRefresh={() => this.refreshList()}
                    refreshing={this.state.refreshing}
                    onViewableItemsChanged={this.handleViewableChanged}
                    viewabilityConfig={{ viewAreaCoveragePercentThreshold: 20 }}
                    ListFooterComponent={(this.state.loading) && <Loading size='small' color='#999' />}
                    renderItem={(data) => <Post data={data} shouldLoad={this.state.changed.includes(data.item.id)} />}
                >

                </FlatListFeed>
            </Container>
        );
    }
}


const Container = styled.View`
  
`;

const FlatListFeed = styled.FlatList`

`;

const Loading = styled.ActivityIndicator`
    margin: 30px 0;
`;


////////////////////////////

const mapDispatchToProps = (dispatch) => bindActionCreators({ setMessage }, dispatch);

export default connect(null, mapDispatchToProps)(Feed);