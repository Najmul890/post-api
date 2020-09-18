import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';


const PostDetails = () => {
    const [post, setPost]=useState([]);
    const [comments, setComments]=useState([]);
    // const [img, setImg]=useState([]);
    const {postId}=useParams();
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/"+postId)
        .then(res=>res.json())
        .then(data=> setPost(data))
    },[])
    
    const {id,title,body}=post;

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${postId}`)
        .then(res=>res.json())
        .then(data=> setComments(data))
    },[])
    

    return (
        <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div">
        
        <h2>Post No. {id} </h2>
            <h3> Title: {title} </h3>
            <Box color="info.main" >{body} </Box>
            
            <h2>Comments: {comments.length} </h2>
            {
                comments.map(comment=> <Comments 
                     key={comment.id}
                    comment={comment} ></Comments> )
            }
        </Typography>    
      </Container>
    </React.Fragment>
    );
};

export default PostDetails;

