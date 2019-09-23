import axios from 'axios';

import { setMessage } from './message';

export const addPost = (post) => {

    return (dispatch, getState) => {

        //dispatch(creatingPost());
        
        /*axios({
            url: 'uploadImage',
            baseURL: 'https://us-central1-instagran-clone-443a33.cloudfunctions.net/',
            method: 'POST',
            data: {
                image: post.image.base64
            }*/

        const data = new FormData();
        
        data.append('file', post.image);
        data.append('userId', '5d6d0add779ac60c0900e9a3');
        data.append('comment', JSON.stringify({ nickname: 'teste nome', comment: 'teste texto' }));

        axios.post('http://192.168.1.119:3001/posts', data)
        .then()
        .catch( (error) => {
            console.log('erro 2', error);
            dispatch(setMessage({ title: 'Erro', text: error.message }));
        });
    }
}

export const addComment = (payload) => {
    
    return (dispatch, getState) => {

        axios.get(`/posts/${payload.postId}.json`)
        .then( (response) => {

            const comments = response.data.comments || [];

            comments.push(payload.comment);

            axios.patch(`/posts/${payload.postId}.json?auth=${getState().user.token}`, { comments })
            .then( (response) => {

                dispatch(fetchPosts());

            }).catch( (error) => {
                console.log(error);
                dispatch(setMessage({ title: 'Erro', text: error.message }));
            });

        }).catch( (error) => {
            console.log(error);
            dispatch(setMessage({ title: 'Erro', text: error.message }));
        });
    }

    /*return {
        type: 'ADD_COMMENT',
        payload: comment
    }*/
}

export const setPosts = (posts) => {

    return {
        type: 'SET_POSTS',
        payload: posts
    }
}

export const fetchPosts = (shouldRefresh = false) => {

    return (dispatch, getState) => {

        return new Promise((resolve, reject) => {

            if(shouldRefresh) dispatch(setPageNumber(0));
            
            if((getState().posts.page >= getState().posts.totalPages) && getState().posts.totalPages){             
                return resolve();
            }
            
            axios.get(`/posts?skip=${getState().posts.page * getState().posts.postsPerPage}&limit=${getState().posts.postsPerPage}`)
            .then( (response) => {
                
                const posts = (shouldRefresh) ? response.data : [ ...getState().posts.posts, ...response.data ];
                
                const totalPages = Math.ceil(response.headers['x-total-count'] / getState().posts.postsPerPage);
    
                dispatch(setPosts(posts));
                dispatch(setPageNumber(getState().posts.page + 1));
                dispatch(setTotalPages(totalPages));
                
                return resolve();
           
            }).catch( (error) => { 
                //dispatch(setPageNumber(getState().posts.page - 1));
                return reject(error);
                //console.log(error);
                //dispatch(setMessage({ title: 'Erro', text: error.message }));
            });

        });

    }
}

const creatingPost = () => {
    return {
        type: 'CREATING_POST'
    }
}

const postCreated = () => {

    return {
        type: 'POST_CREATED'
    }
}

const setPageNumber = (page) => {

    return {
        type: 'PAGE_NUMBER',
        payload: page
    }
}

const pageDown = () => {

    return {
        type: 'PAGE_DOWN'
    }
}

const setTotalPages = (total) => {

    return {
        type: 'SET_TOTAL_PAGES',
        payload: total
    }
}