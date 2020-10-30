import React from 'react';
import '../App.css';
import { Heading,  
    Box, 
    ResponsiveContext,
    Text,
    Card,
    CardBody,
    Grid, Grommet } from 'grommet';

import { Catalog, ChatOption, Technology, Language, Cpu } from 'grommet-icons';
import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';


    const customTheme = deepMerge(grommet, {
        global: {
          font: {
            family: 'Comic Sans MS',
          },
        },
      });


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
        subTitle: 'Français - Anglais - Espagnol',
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

export default Skills;