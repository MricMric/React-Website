import React from 'react';
import '../App.css';
import {Box, Grommet, Heading, List, Text } from 'grommet';
import { Gremlin } from 'grommet-icons';
import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';   

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
    tab: {
       hover: {
            color: 'dark',
       },
    },
  });


    function Experiences() {
        const data = ['Stagiaire développeur web', 'Intérimaire manufacture', 'Stage à l\'étranger', 'North Carolina'];
        return (
            <Grommet theme={customTheme}>
                <Heading margin="xlarge" textAlign="center">Expériences</Heading>
                <Box pad="large" height="100%">
                <List data={data} pad="medium" background="dark-1">
                    {(datum, index) => (
                    <Box
                        key={index}
                        direction="row-responsive"
                        gap="large"
                        size="xsmall"
                        align="center"
                    >
                        <Gremlin size="large" />
                        <Text weight="bold">{datum}</Text>
                    </Box>
                    )}
                </List>
                </Box>
            </Grommet>
        );
    }
    
export default Experiences;