import React from 'react';
import '../App.css';
import { Header,
    Nav, 
    Menu, 
    Box, 
    ResponsiveContext,
    Anchor,
    Button as GrommetButton } from 'grommet';


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
                  { label: 'Education', onClick: () => {} },
                  { label: 'Contact', onClick: () => {} },
                ]}
              />
            ) : (
              <Nav direction="row">
                <Anchor href="#" label="Accueil" />
                <Anchor href="#" label="Expériences" />
                <Anchor href="#" label="Compétences" />
                <Anchor href="#" label="Education" />
                <Anchor href="#" label="Contact" />
              </Nav>
            )
          }
        </ResponsiveContext.Consumer>
      </Header>
    </>
      );
  }

  export default HeaderNav;