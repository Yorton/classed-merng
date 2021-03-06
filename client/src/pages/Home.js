import React, {useContext} from 'react';
import {useQuery} from '@apollo/react-hooks';
//import gql from 'graphql-tag';
import {Grid, Transition} from 'semantic-ui-react';

import {AuthContext} from '../context/auth';

import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import {FETCH_POSTS_QUERY} from '../util/graphql';


 function Home(props){

    const {user} = useContext(AuthContext);

//without = {} getPosts would be undefined
    const {
            loading, 
            data: {getPosts: posts} = {}
         } = useQuery(FETCH_POSTS_QUERY);

// const {
//     loading, 
//     data
//  } = useQuery(FETCH_POSTS_QUERY);

    return (

        //data === undefined ? <div/> :
       // posts === undefined ? <div/> :

        //(
        <Grid columns={3}>
            <Grid.Row className="page-title">
               <h1>Recent Posts</h1>
            </Grid.Row>
            <Grid.Row>
                {
                    user && (
                        <Grid.Column>
                            <PostForm props={props} />
                        </Grid.Column>
                    )
                }


                {
                    loading 
                    ? 
                    (
                        <h1>Loading posts...</h1>
                    )
                    :
                    (
                        <Transition.Group>
                            {
             
                                //data && data.getPosts && data.getPosts.map(post => (
                                posts && posts.map(post => (
                                <Grid.Column key={post.id} style={{marginBottom: 20}}>
                                    <PostCard post={post} props={props} />
                                </Grid.Column>
                                ))
                               
                            }
                        </Transition.Group>
                    )
                }

                
            </Grid.Row>
        </Grid>
       // )
    )
}

// const FETCH_POSTS_QUERY = gql`
// {
//     getPosts{
//         id 
//         body 
//         createdAt 
//         username 
//         likeCount
//         likes{
//             username
//         }
//         commentCount
//         comments{
//             id 
//             username 
//             createdAt 
//             body
//         }
//     }
// }    
// `;

export default Home;