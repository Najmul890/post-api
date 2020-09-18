import React, { useEffect, useState } from 'react';
import SinglePost from '../SinglePost/SinglePost';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';


const Post = () => {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/")
        .then(res=> res.json())
        .then(data=> setPosts(data) )
    },[])
    return (
        <React.Fragment>
      <CssBaseline />
      <Container  fixed>
        <Typography  component="div" style={{ padding:'10px 30px' }} >
        <Box textAlign="center" color="secondary.main">
            <h2>All post: {posts.length} </h2>
        </Box>    
            {
                posts.map(post=> <SinglePost 
                     key={post.id}
                    post={post} ></SinglePost> )
            }
        </Typography> 
           
        
      </Container>
    </React.Fragment>
    );
};

export default Post;
