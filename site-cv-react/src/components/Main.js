import React from 'react';
import '../App.css';
import { Box, ResponsiveContext, Text, Grid, Grommet } from 'grommet'; 
import { Accessibility, Bike, Edit, Gamepad, Map, Monitor} from 'grommet-icons';
import MyHr from "./Hr";

function MyMain() {
    const sizeIcons = React.useContext(ResponsiveContext);
    return (
      <>
        {sizeIcons === "small" ? (
          <>
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
                <Accessibility size='xlarge' color='black' align='center' jusitfy='center'>
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
        <MyHr/>
        </>
          ) : (
            <>
          <MyHr/>
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
      </>
          )
        }
      
      </>
      );
  }

  export default MyMain;