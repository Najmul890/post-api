import React, { useEffect, useState } from 'react';
import './SinglePost.css';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #2196F3 30%,  #21CBF3 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 40,
      padding: '0 20px',
    },
  });

const SinglePost = (props) => {
    const {id,title}=props.post;
    const classes = useStyles();
    
    return (
        <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#B5C9C4',padding:'20px 30px',marginTop:'20px' }} >
        <h4>Post No. {id} </h4>
            <h2> {title} </h2>
            
            <Link className="link"  to={"/post/"+id} >
              <Button className={classes.root}>See Details</Button>
            </Link>
        </Typography>    
      </Container>
    </React.Fragment>
        
    );
};

export default SinglePost;