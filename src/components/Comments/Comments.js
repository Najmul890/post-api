import { Box } from '@material-ui/core';
import React from 'react';
import Image from '../../img/avatar.png'; 

const Comments = (props) => {
    const {name, email, body}=props.comment;
    return (
        <Box bgcolor="#FDEFF2" style={{margin:'20px',border:'2px solid lightGray',padding:'50px 100px'}} >

            <h4>Name: {name} <span><img style={{width:'20px'}} src={Image} alt=""/> </span> </h4>
            <h4>Email: {email} </h4>
            <h4>Comment:</h4>
            <p style={{color:'#F30F5E '}} >{body} </p>
        </Box>
    );
};

export default Comments;

