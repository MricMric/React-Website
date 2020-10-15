import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Header,
   Main, 
   Heading, 
   Paragraph,
   Button, 
   Sidebar, 
   Nav, 
   Menu, 
   Avatar, 
   Box, 
   Footer,
   ResponsiveContext,
   Anchor,
   Text,
   Grid,
   Button as GrommetButton, Grommet } from 'grommet';

import { Home, Projects, Clock, Help, UserFemale,ChatOption, Facebook, Gamepad, Map, Monitor} from 'grommet-icons';
import { hpe } from 'grommet-theme-hpe';

function App() {
  return (

  <Grommet theme={hpe}>
    <HeaderNav/>
    <GridMain/>
    <FooterBot/>
  </Grommet>
   
  );
}

function HeaderNav() {
  return (
    <Header background="dark-1" pad="medium">
    <Box direction="row"  gap="small">
      <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />   
      <Avatar background="accent-2">
        <UserFemale color="accent-1" />
      </Avatar>
    </Box>
    <Box direction="row" align="center" gap="medium">
      Voici mon Menu 
    </Box>
    <ResponsiveContext.Consumer>
      {responsive =>
        responsive === 'small' ? (
          <Menu
            label="More"
            items={[
              { label: 'This is', onClick: () => {} },
              { label: 'The Menu', onClick: () => {} },
              { label: 'Component', onClick: () => {} },
            ]}
          />
        ) : (
          <Nav direction="row">
            <Anchor href="#" label="This is" />
            <Anchor href="#" label="The Nav" />
            <Anchor href="#" label="Component" />
            <Anchor icon={<Home />} hoverIndicator />
            <Anchor icon={<Facebook />} hoverIndicator />
            <Anchor icon={<ChatOption />} hoverIndicator />
          </Nav>
        )
      }
    </ResponsiveContext.Consumer>
  </Header>
    );
}

function GridMain() {
  return (
    <Grid
    columns={{
      count: 3,
      size: 'auto',
    }}
    margin="large"
    gap="large"
    responsive= "true"
    >
      <Box margin="xlarge" gap="medium" align="center" animation="fadeIn">
        <Gamepad size='xlarge' color='black' align='center' jusitfy='center'>
        </Gamepad>
        <Text size='35px' weight="bold">Loisir</Text>
      </Box>
      <Box margin="xlarge" gap="medium" align="center" animation="fadeIn">
        <Monitor size='xlarge' color='black' align='center' jusitfy='center'>
        </Monitor>
        <Text size='35px' weight="bold">Travail</Text>
      </Box>
      <Box margin="xlarge" gap="medium" align="center" animation="fadeIn">
        <Map size='xlarge' color='black' align='center' jusitfy='center'>
        </Map>
        <Text size='35px' weight="bold">Localisation</Text>
      </Box>
    </Grid>
    );
}

function FooterBot() {
  return (
    <Footer background="dark-1" pad="medium" justify="center">
      <Text textAlign="center" size="small">
        © 2020 Copyright Aymeric Delabarre
      </Text>
      <Anchor label="About" />
    </Footer>
);
}
export default App;
