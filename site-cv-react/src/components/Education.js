import React, { useState } from 'react';
import '../App.css';
import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';
import logoBlagnac from '../pictures/logo_blagnac.png';
import logoRtai from '../pictures/logo_rtai.png';
import logoYnov from '../pictures/logo_ynov.png';
import logoLycee from '../pictures/logo_lycee.png';
import { Tabs,
    Tab,
    Heading,
    Paragraph,
    Text,
    ResponsiveContext,
    Image,
    Box, Grommet } from 'grommet';


const customTheme = deepMerge(grommet, {
    global: {
      font: {
        family: 'Comic Sans MS',
      },
    },
  });

function Education() {
    const [index, setIndex] = useState();
    const onActive = nextIndex => setIndex(nextIndex);
    const sizeEducation = React.useContext(ResponsiveContext);
    return(
        <>
        {sizeEducation === "small" ? (
      
    <Grommet theme={customTheme}>
    <Heading margin="xlarge" textAlign="center">Education</Heading>
      <Tabs activeIndex={index} onActive={onActive}>
        <Tab title="Lycée">
          <Box margin="small" pad="large" align="center" background="white-1">
            <Image size="large" round="false" fit="cover" src={logoLycee} />
            <Paragraph>
                <Text size='22px' weight="bold">Lycée Clémence Royer</Text> | Fonsorbes (31) | 2017
                    Obtention du Baccalauréat Scientifique, Sciences et Vie de la Terre, Mention Assez Bien.
            </Paragraph>
          </Box>
        </Tab>
        <Tab title="DUT">
          <Box margin="small" pad="large" align="center" background="dark-1">
            <Paragraph>
                <Text size='22px' weight="bold">Iut Informatique</Text> | Blagnac (31) | 2018
                    Obtention d'un DUT Informatique.
            </Paragraph>
          </Box>
        </Tab>
        <Tab title="Licence">
          <Box margin="small" pad="large" align="center" background="white-3">
            <Image size="150px" round="false" fit="cover" src={logoRtai} />
            <Paragraph>
                <Text size='22px' weight="bold">Licence Professionnelle RTAI</Text> | Toulouse (31) | 2020
                 Obtention d’une licence professionnelle Responsable technique d'Application Internet.
            </Paragraph>
          </Box>
        </Tab>
        <Tab title="Master">
          <Box margin="small" pad="large" align="center" background="dark-1">
            <Paragraph>
                <Text size='22px' weight="bold">Mastère Expert Développement Web</Text> | Ynov Campus Toulouse (31) | 2021
                    En vue de l'obtention d’un Mastère Expert Développement Web.
            </Paragraph>
          </Box>
        </Tab>
      </Tabs>
    </Grommet>
    ) : (
        <Grommet theme={customTheme}>
            <Heading margin="xlarge" textAlign="center">Education</Heading>
            <Tabs activeIndex={index} onActive={onActive}>
                <Tab title="Lycée">
                <Box margin="small" pad="large" align="center" background="white-1">
                    <Image size="large" round="false" fit="cover" src={logoLycee} />
                    <Paragraph>
                        <Text size='22px' weight="bold">Lycée Clémence Royer</Text> | Fonsorbes (31) | 2017
                            Obtention du Baccalauréat Scientifique, Sciences et Vie de la Terre, Mention Assez Bien.
                    </Paragraph>
                </Box>
                </Tab>
                <Tab title="DUT">
                <Box margin="small" pad="large" align="center" background="dark-1">
                    <Image size="large" round="false" src={logoBlagnac} />
                    <Paragraph>
                        <Text size='22px' weight="bold">Iut Informatique</Text> | Blagnac (31) | 2018
                            Obtention d'un DUT Informatique.
                    </Paragraph>
                </Box>
                </Tab>
                <Tab title="Licence">
                <Box margin="small" pad="large" align="center" background="white-3">
                    <Image size="150px" round="false" fit="cover" src={logoRtai} />
                    <Paragraph>
                        <Text size='22px' weight="bold">Licence Professionnelle RTAI</Text> | Toulouse (31) | 2020
                        Obtention d’une licence professionnelle Responsable technique d'Application Internet.
                    </Paragraph>
                </Box>
                </Tab>
                <Tab title="Master">
                <Box margin="small" pad="large" align="center" background="dark-1">
                    <Image size="large" round="false" fit="cover" src={logoYnov} />
                    <Paragraph>
                        <Text size='22px' weight="bold">Mastère Expert Développement Web</Text> | Ynov Campus Toulouse (31) | 2021
                            En vue de l'obtention d’un Mastère Expert Développement Web.
                    </Paragraph>
                </Box>
                </Tab>
            </Tabs>
        </Grommet>

        )
    }
    </>
    );
   
  }

  export default Education;