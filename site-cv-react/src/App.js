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
   Meter,
   Image,
   Text,
   Card,
   CardHeader,
   CardBody,
   CardFooter,
   Grid,
   Button as GrommetButton, Grommet } from 'grommet';

import { Home, Location,
  System,
  ShieldSecurity,
  Tasks,
  User,
  Catalog,
  ChatOption,
  Technology,
  Wifi,
  Language,
  Cpu,
  Accessibility, Bike, Edit, Projects, Clock, Help, UserFemale, Facebook, 
  Gamepad, Map, Monitor, Favorite, ShareOption} from 'grommet-icons';
import { hpe } from 'grommet-theme-hpe';
import { Link } from 'react-router-dom';
import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';

function App() {
  return (

  <Grommet theme={hpe}>
    <HeaderNav/>
    <TopMain/>
    <GridMain/>
    <Skills/>
    <FooterBot/>
  </Grommet>
   
  );
}

const customTheme = deepMerge(grommet, {
  global: {
    font: {
      family: 'Comic Sans MS',
    },
  },
  card: {
    footer: {
      pad: { horizontal: 'medium', vertical: 'small' },
      background: '#FFFFFF27',
    },
  },
});

function HeaderNav() {
  return (
    <>
    <Header background="dark-1" pad="medium">
      <Box direction="row" align="center" gap="small">
        "Une vie sans examen ne vaut pas la peine d’être vécue" (Socrate - 399 av. J.-C)
      </Box>
      <ResponsiveContext.Consumer>
        {responsive =>
          responsive === 'small' ? (
            <Menu
              label="Click me"
              items={[
                { label: 'Accueil', onClick: () => {} },
                { label: 'Expériences', onClick: () => {} },
                { label: 'Compétences', onClick: () => {} },
                { label: 'Contact', onClick: () => {} },
              ]}
            />
          ) : (
            <Nav direction="row">
              <Anchor href="#" label="Accueil" />
              <Anchor href="#" label="Expériences" />
              <Anchor href="#" label="Compétences" />
              <Anchor href="#" label="Contact" />
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  </>
    );
}

function TopMain() {
    const size = React.useContext(ResponsiveContext);
  return (
    <>
        {size === "small" ? (
          <Grommet theme={customTheme}>
            <Grid
              rows={{
                count: 2,
                size: 'auto',
              }}
              margin="large"
              gap="large"
              responsive= "true"
            >
              <Box margin="large">
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
                          <Box textAlign="center">
                            <Heading level="3" margin="none">
                              Aymeric
                            </Heading>
                            <Text size="small" textAlign="center" weight="bold">DELABARRE</Text>
                          </Box>
                        </CardHeader>
                      </Stack>
                    </Card>
              </Box>
              <Box margin="large">
                <Paragraph>
                  <Text size='22px' weight="bold">B</Text>onjour, je m'appelle Aymeric, j'ai 21 ans et je suis 
                    actuellement en première année de <Text size='17px' weight="bold">Mastère 1 Développement Web</Text> chez 
                    Ynov Campus Toulouse. Je suis en parallèle en alternance à la <Text size='17px' weight="bold">Banque Populaire Caise d'Eparge (BPCE-IT)</Text>.
                </Paragraph>
                <Paragraph>
                  <Text size='22px' weight="bold">B</Text>onjour, je m'appelle Aymeric, j'ai 21 ans et je suis 
                    actuellement en première année de <Text size='17px' weight="bold">Mastère 1 Développement Web</Text> chez 
                    Ynov Campus Toulouse. Je suis en parallèle en alternance à la <Text size='17px' weight="bold">Banque Populaire Caise d'Eparge (BPCE-IT)</Text>.
                </Paragraph>
              </Box>
            </Grid>
          </Grommet>
        ) : (
        <Grommet theme={customTheme}>
          <Heading margin="xlarge" textAlign="center">Profil</Heading>
              <Grid
                columns={{
                  count: 2,
                  size: 'auto',
                }}
                margin="large"
                gap="large"
                responsive= "true"
              >
                <Box margin="large">
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
                <Box margin="large">
                  <Paragraph>
                    <Text size='22px' weight="bold">B</Text>onjour, je m'appelle Aymeric, j'ai 21 ans et je suis 
                      actuellement en première année de <Text size='17px' weight="bold">Mastère 1 Développement Web</Text> chez 
                      Ynov Campus Toulouse. Je suis en parallèle en alternance à la <Text size='17px' weight="bold">Banque Populaire Caise d'Eparge (BPCE-IT)</Text>.
                  </Paragraph>
                  <Paragraph>
                    <Text size='22px' weight="bold">B</Text>onjour, je m'appelle Aymeric, j'ai 21 ans et je suis 
                      actuellement en première année de <Text size='17px' weight="bold">Mastère 1 Développement Web</Text> chez 
                      Ynov Campus Toulouse. Je suis en parallèle en alternance à la <Text size='17px' weight="bold">Banque Populaire Caise d'Eparge (BPCE-IT)</Text>.
                  </Paragraph>
                </Box>
              </Grid>
        </Grommet>
        )
        }
    </>
  );
}

function GridMain() {
  const sizeIcons = React.useContext(ResponsiveContext);
  return (
    <>
      {sizeIcons === "small" ? (
        <Grommet>
          <Box background="dark-1">
          <Grid
          rows={{
            count: 3,
            size: 'auto',
          }}
          margin="large"
          gap="large"
          responsive= "true"
          >
          <Box margin="xlarge" gap="medium" align="center" animation="fadeIn">
            <Monitor size='xlarge' color='white' align='center' jusitfy='center'>
            </Monitor>
            <Text size='35px' weight="bold" textAlign="center">Travail</Text>
            <Text size='20px' textAlign="center">Développeur Web</Text>
          </Box>
          <Box margin="xlarge" gap="medium" align="center" animation="fadeIn">
            <Map size='xlarge' color='white' align='center' jusitfy='center'>
            </Map>
            <Text size='35px' weight="bold">Localisation</Text>
            <Text size='20px' textAlign="center">Toulouse</Text>
          </Box>
          <Box margin="xlarge" gap="medium" align="center" animation="fadeIn">
            <Gamepad size='xlarge' color='white' align='center' jusitfy='center'>
            </Gamepad>
            <Text size='35px' weight="bold">Loisir</Text>
            <Text size='20px' textAlign="center">Jeux Video - Voyage</Text>
          </Box>
        </Grid>
        </Box>
    
        <Box background="white">
          <Grid
          rows={{
            count: 3,
            size: 'auto',
          }}
          
          responsive= "true"
          >
            <Box margin="xlarge" gap="medium" align="center" animation="fadeIn">
              <Accessibility size='xlarge' color='balck' align='center' jusitfy='center'>
              </Accessibility>
              <Text size='35px' weight="bold">Sociale</Text>
              <Text size='20px' textAlign="center">Facebook - Twitter - Instagram</Text>
            </Box>
            <Box margin="xlarge" gap="medium" align="center" animation="fadeIn">
              <Bike size='xlarge' color='black' align='center' jusitfy='center'>
              </Bike>
              <Text size='35px' weight="bold">Sportif</Text>
              <Text size='20px' textAlign="center">Musculation - Boxe</Text>
            </Box>
            <Box margin="xlarge" gap="medium" align="center" animation="fadeIn">
              <Edit size='xlarge' color='black' align='center' jusitfy='center'>
              </Edit>
              <Text size='35px' weight="bold">Créatif</Text>
              <Text size='20px' textAlign="center">Créativité sans limite</Text>
            </Box>
          </Grid>
        </Box>
      </Grommet>
        ) : (
        <Grommet>
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
              <Text size='35px' weight="bold" textAlign="center">Travail</Text>
              <Text size='20px' textAlign="center">Développeur Web</Text>
            </Box>
            <Box margin="xlarge" gap="medium" align="center" animation="fadeIn">
              <Map size='xlarge' color='black' align='center' jusitfy='center'>
              </Map>
              <Text size='35px' weight="bold">Localisation</Text>
              <Text size='20px'>Toulouse</Text>
            </Box>
            <Box margin="xlarge" gap="medium" align="center" animation="fadeIn">
              <Gamepad size='xlarge' color='black' align='center' jusitfy='center'>
              </Gamepad>
              <Text size='35px' weight="bold">Loisir</Text>
              <Text size='20px'>Jeux Video - Voyage</Text>
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
                <Text size='35px' weight="bold">Sociale</Text>
                <Text size='20px'>Facebook - Twitter - Instagram</Text>
              </Box>
              <Box margin="xlarge" gap="medium" align="center" animation="fadeIn">
                <Bike size='xlarge' color='white' align='center' jusitfy='center'>
                </Bike>
                <Text size='35px' weight="bold">Sportif</Text>
                <Text size='20px'>Musculation - Boxe</Text>
              </Box>
              <Box margin="xlarge" gap="medium" align="center" animation="fadeIn">
                <Edit size='xlarge' color='white' align='center' jusitfy='center'>
                </Edit>
                <Text size='35px' weight="bold">Créatif</Text>
                <Text size='20px'>Créativité sans limite</Text>
              </Box>
            </Grid>
          </Box>
    </Grommet>
        )
      }
    
    </>
    );
}


function Skills(){
  const data = [
    {
      color: 'neutral-1',
      icon: <Technology size="large" />,
      title: 'Technologies',
      subTitle: 'Java - Html - Css - Js - Python - C - React - Php - Symphony - Django - Laravel - MySql',
    },
    {
      color: 'neutral-2',
      icon: <Cpu size="large" />,
      title: 'Systèmes d\'exploitations',
      subTitle: 'Linux - Windows',
    },
    {
      color: 'neutral-3',
      icon: <Catalog size="large" />,
      title: 'Logiciels',
      subTitle: 'Suite Adobe - Suite Office - Wamp - Eclipse - Gitlab - Android Studio',
    },
    {
      color: 'neutral-4',
      icon: <ChatOption size="large" />,
      title: 'Soft Skills',
      subTitle: 'Orgnaisé - Travailleur - Dynamique - Ponctuel - Efficace en travail d\'équipe',
    },
    {
      color: 'status-error',
      icon: <Language size="large" />,
      title: 'Langues',
      subTitle: 'Unique identification light',
    },
  ];
  
  const Identifier = ({ children, title, subTitle, size, ...rest }) => (
    <Box gap="xsmall" align="center" {...rest}>
      {children}
      <Box>
        <Text margin="xsmall" size="medium" weight="bold">
          {title}
        </Text>
        <Text size={size}>{subTitle}</Text>
      </Box>
    </Box>
  );

  const sizeSkills = React.useContext(ResponsiveContext);

  return(
    <>
      {sizeSkills === "small" ? (
      <Grommet theme={customTheme}>
        <Box background="dark-1">
          <Heading margin="xlarge" textAlign="center">Compétences</Heading>
          <Box pad="large">
            <Grid gap="xlarge" rows="small" columns={{ count: 'fit', size: 'small' }}>
              {data.map(value => (
                <Card background={value.color} key={value.message}>
                  <CardBody pad="small">
                    <Identifier
                      pad="xsmall"
                      title={value.title}
                      subTitle={value.subTitle}
                      size="small"
                      align="start"
                    >
                      {value.icon}
                    </Identifier>
                  </CardBody>
                </Card>
              ))}
            </Grid>
          </Box>
        </Box>
      </Grommet>
      ) : (
        <Grommet theme={customTheme}>
          <Box>
            <Heading margin="xlarge" textAlign="center">Compétences</Heading>
            <Box pad="large">
              <Grid gap="xlarge" rows="small" columns={{ count: 'fit', size: 'small' }}>
                {data.map(value => (
                  <Card background={value.color} key={value.message}>
                    <CardBody pad="small">
                      <Identifier
                        pad="xsmall"
                        title={value.title}
                        subTitle={value.subTitle}
                        size="small"
                        align="start"
                      >
                        {value.icon}
                      </Identifier>
                    </CardBody>
                  </Card>
                ))}
              </Grid>
            </Box>
          </Box>
        </Grommet>
      )
      }
  
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
      <Anchor href="#" label="À propos" />
    </Footer>
    </>
);
}
export default App;
