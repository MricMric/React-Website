import React from 'react';
import '../App.css';
import {Box, Grommet, Heading, List, Text } from 'grommet';
import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';   

const customTheme = deepMerge(grommet, {
    global: {
      font: {
        family: 'Comic Sans MS',
      },
    },
  });


    function Experiences() {
        const data = ['• Stagiaire développeur web - Agoravita | Toulouse | 2020 - 4 mois',
        '• Intérimaire manufacture - Saica Pack | Toulouse | 2019 - 5 semaines',
        '• Stage à l\'étranger - Innopolis University | Russie | 2019 - 10 semaines',
        '• Chargé de mise en rayon - Leclec | Blagnac | 2019 - CDI 5 mois',
        '• IHM d\'un Mastermind - Iut Blagnac | Toulouse | 2019 - 1 semaine',
        '• Participation Nuit de l\'informatique - Réalisation d\'un site E-commerce | 2018',
        '• Employé polyvalent - KFC | Toulouse | 2017 - CDI 2 mois'];

        
        return (
            <Grommet theme={customTheme}>
                <Heading margin="xlarge" textAlign="center">Expériences</Heading>
                <Box pad="large" height="100%">
                <List data={data} pad="medium" background="dark-1">
                    {(datum, index) => (
                    <Box
                        key={index}
                        textAlign="center"
                        direction="row-responsive"
                        gap="large"
                        size="xsmall"
                        align="center"
                    >
                        <Text weight="bold" >{datum}</Text>
                    </Box>
                    )}
                </List>
                </Box>
            </Grommet>
        );
    }
    
export default Experiences;