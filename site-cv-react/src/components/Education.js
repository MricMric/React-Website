import React from 'react';
import '../App.css';
import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';
import logoBlagnac from '../logo_blagnac.png';
import logoRtai from '../logo_rtai.png';
import logoYnov from '../logo_ynov.png';
import { Heading, 
    Paragraph,
    Avatar, 
    Box, 
    Carousel,
    Button as GrommetButton, Grommet } from 'grommet';
import { Car, TreeOption} from 'grommet-icons';


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
    carousel: {
      animation: {
        duration: 400,
      },
      icons: {
        color: 'white',
      },
      disabled: {
        icons: {
          color: 'white',
        },
      },
    },
  });

function Education() {
    return(
      <>
    <Grommet theme={customTheme}>
      <Heading margin="xlarge" textAlign="center">Education</Heading>
      <Box align="center" pad="small" margin="xlarge" width="xlarge">
        <Carousel>
          <Box pad="small" background="dark-1">
            <Avatar size="xlarge" round="false" fit="cover" src={logoBlagnac} />
            <Paragraph>
              chez Ynov Campus Toulouse. Je suis en parallèle en alternance à la 
            </Paragraph>
          </Box>
          <Box pad="small" background="dark-1">
            <Avatar size="xlarge" round="false" fit="cover" src={logoRtai} />
            <Paragraph>
              chez Ynov Campus Toulouse. Je suis en parallèle en alternance à la 
            </Paragraph>
          </Box>
          <Box pad="small" background="dark-1">
            <Avatar size="xlarge" round="false" fit="cover" src={logoYnov} />
            <Paragraph>
              chez Ynov Campus Toulouse. Je suis en parallèle en alternance à la 
            </Paragraph>
          </Box>
        </Carousel>
      </Box>
    </Grommet>
    </>
    );
   
  }

  export default Education;