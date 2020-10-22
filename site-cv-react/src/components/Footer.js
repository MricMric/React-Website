import React from 'react';
import '../App.css';
import { Box, 
    Footer,
    Text} from 'grommet';



function FooterBot() {
    return (
      <>
      <Box height="small"></Box>
      <Footer background="dark-1" pad="medium" justify="center">
        <Text textAlign="center" size="small">
          © 2020 Copyright Aymeric Delabarre
        </Text>
      </Footer>
      </>
  );
  }

  export default FooterBot;