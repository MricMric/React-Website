import React from 'react';
import '../App.css';
import { Box } from 'grommet';


function Citations(props) {
    
    const posts = props.posts;
    var number = Math.floor(Math.random() * Math.floor(posts.length-1));
  
    return(
        <>
         <Box direction="row" align="center" gap="small">
            {posts[number].title}
        </Box>
        </>
    ); 
}

export default Citations;