import React from 'react';
import '../App.css';
import me from '../pictures/me.jpg';
import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';
import { Heading, 
    Paragraph,
    Avatar, 
    Box, 
    ResponsiveContext,
    Stack,
    Image,
    Text,
    Card,
    CardHeader,
    CardBody,
    Grid, Grommet } from 'grommet';

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



function Profil() {
    const sizeProfil = React.useContext(ResponsiveContext);
  return (
    <>
        {sizeProfil === "small" ? (
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
                            src={me}
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
                    <Text size='22px' weight="bold">J</Text>e suis diplômé d'un <Text size='17' weight="bold">Baccalauréat Scientifique</Text>, Science et Vie de la 
                    Terre, option Informatique Science du Numérique. Après cela j'ai été diplômé d'un <Text size='17' weight="bold">Diplôme Universitaire de 
                    Technologie</Text> en Informatique à Blagnac. Puis, une <Text size='17px' weight="bold">licence professionnelle Responsable Technique d'Application internet</Text> en 2020.
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
                              src={me}
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
                    <Text size='22px' weight="bold">J</Text>e suis diplômé d'un <Text size='17' weight="bold">Baccalauréat Scientifique</Text>, Science et Vie de la 
                    Terre, option Informatique Science du Numérique. Après cela j'ai été diplômé d'un <Text size='17' weight="bold">Diplôme Universitaire de 
                    Technologie</Text> en Informatique à Blagnac. Puis, une <Text size='17px' weight="bold">licence professionnelle Responsable Technique d'Application internet</Text> en 2020.
                </Paragraph>
                </Box>
              </Grid>
        </Grommet>
        )
        }
    </>
  );
}

export default Profil;