import React, { useState, useContext } from 'react';
import {Button, Card, Icon, Label, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import monent from 'moment';

import {AuthContext} from '../context/auth';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';

import MyPopup from '../util/MyPopup';

function PostCard({post:{body, createdAt, id, username, likeCount, commentCount, likes}, props}) {

    const {user} = useContext(AuthContext);

    function deletePostCallback(){

        props.history.push('/');
    }

  
    return (

        <Card fluid>
            <Card.Content>
                <Image
                floated='right'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                />
                <Card.Header>{username}</Card.Header>
                <Card.Meta as={Link} to={`/posts/${id}`}>{monent(createdAt).fromNow(true)}</Card.Meta>
                <Card.Description>{body}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <LikeButton user={user} post={{id, likes, likeCount} }/>
                {
                /*
                <Button as='div' labelPosition='right' onClick={likePost}>
                    <Button color='teal' basic>
                        <Icon name='heart' />
                    </Button>
                    <Label basic color='teal' pointing='left'>
                        {likeCount}
                    </Label>
                </Button>
                */
                }

                <MyPopup content="Comment on post" >
                    <Button labelPosition='right' as={Link} to={`/posts/${id}`}>
                        <Button color='blue' basic>
                            <Icon name='comments' />
                        </Button>
                        <Label basic color='blue' pointing='left'>
                            {commentCount}
                        </Label>
                    </Button>
                </MyPopup>

                {
                    user && user.username === username && <DeleteButton postId={id} callback={deletePostCallback}/>
                     
                        /*
                        <Button as="div" color="red" onClick={()=> console.log('Delete post')} floated="right">
                            <Icon name="trash" style={{margin : 0}}/>
                        </Button>
                        */
                        
                }
            </Card.Content>
        </Card>
    )
  
}

export default PostCard;
