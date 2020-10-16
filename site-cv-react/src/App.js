import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import moi from './moi.jpg';
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
   Stack,
   Image,
   Text,
   Card,
   CardHeader,
   CardBody,
   CardFooter,
   Grid,
   Button as GrommetButton, Grommet } from 'grommet';

import { Home, Accessibility, Bike, Edit, Projects, Clock, Help, UserFemale,ChatOption, Facebook, Gamepad, Map, Monitor, Favorite, ShareOption} from 'grommet-icons';
import { hpe } from 'grommet-theme-hpe';
import { Link } from 'react-router-dom';
import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';

function App() {
  return (

  <Grommet theme={hpe}>
    <HeaderNav/>
    <GridMain/>
    <FooterBot/>
  </Grommet>
   
  );
}

const customTheme = deepMerge(grommet, {
  paragraph: {
    font: {
      family: 'Comic Sans MS',
    },
  },
});

function HeaderNav() {
  return (
    <Header background="dark-1" pad="medium">
    <Box direction="row"  gap="small">
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
    <>
    <Grommet theme={customTheme}>
    <Grid
      fill
      areas={[
        { name: 'nav', start: [0, 0], end: [0, 0] },
        { name: 'main', start: [1, 0], end: [1, 0] },
      ]}
      columns={['medium', 'flex']}
      rows={['flex']}
      gap="large"
    >
      <Box gridArea="nav" margin="large">
        <Card width="medium" height="medium">
              <Stack anchor="bottom-left">
                <CardBody height="medium">
                  <Image
                    fit="cover"
                    src={moi}
                    a11yTitle="aymeric"
                  />
                </CardBody>
                <CardHeader
                  pad={{ horizontal: 'small', vertical: 'small' }}
                  background="#000000A0"
                  width="medium"
                  justify="start"
                >
                  <Avatar a11yTitle="avatar"></Avatar>
                  <Box>
                    <Heading level="3" margin="none">
                      Aymeric
                    </Heading>
                    <Text size="small" textAlign="center" weight="bold">DELABARRE</Text>
                  </Box>
                </CardHeader>
              </Stack>
            </Card>
      </Box>
      <Box gridArea="main" margin="large">
        <Paragraph>
          <Text size='22px' weight="bold">B</Text>onjour, je m'appelle Aymeric, j'ai 21 ans et je suis 
            actuellement en première année de <Text size='17px' weight="bold">Mastère 1 Développement Web</Text> chez 
            Ynov Campus Toulouse. Je suis en parallèle en alternance à la <Text size='17px' weight="bold">Banque Populaire Caise d'Eparge (BPCE-IT)</Text>.
        </Paragraph>
      </Box>
    </Grid>


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
        <Monitor size='xlarge' color='black' align='center' jusitfy='center'>
        </Monitor>
        <Text size='35px' weight="bold" textAlign="center">Développeur Web</Text>
      </Box>
      <Box margin="xlarge" gap="medium" align="center" animation="fadeIn">
        <Map size='xlarge' color='black' align='center' jusitfy='center'>
        </Map>
        <Text size='35px' weight="bold">Toulousain</Text>
      </Box>
      <Box margin="xlarge" gap="medium" align="center" animation="fadeIn">
        <Gamepad size='xlarge' color='black' align='center' jusitfy='center'>
        </Gamepad>
        <Text size='35px' weight="bold">Loisir</Text>
      </Box>
    </Grid>

    <Box background="dark-1">
      <Grid
      columns={{
        count: 3,
        size: 'auto',
      }}
      
      responsive= "true"
      >
        <Box margin="xlarge" gap="medium" align="center" animation="fadeIn">
          <Accessibility size='xlarge' color='white' align='center' jusitfy='center'>
          </Accessibility>
          <Text size='35px' weight="bold">Social</Text>
        </Box>
        <Box margin="xlarge" gap="medium" align="center" animation="fadeIn">
          <Bike size='xlarge' color='white' align='center' jusitfy='center'>
          </Bike>
          <Text size='35px' weight="bold">Sportif</Text>
        </Box>
        <Box margin="xlarge" gap="medium" align="center" animation="fadeIn">
          <Edit size='xlarge' color='white' align='center' jusitfy='center'>
          </Edit>
          <Text size='35px' weight="bold">Créatif</Text>
        </Box>
      </Grid>
    </Box>
    </Grommet>
    </>
    );
}

function FooterBot() {
  return (
    <>
    <Box height="small"></Box>
    <Footer background="dark-1" pad="medium" justify="center">
      <Text textAlign="center" size="small">
        © 2020 Copyright Aymeric Delabarre
      </Text>
      <Anchor label="About" />
    </Footer>
    </>
);
}
export default App;
