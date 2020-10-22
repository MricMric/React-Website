import React, { useRef } from 'react';
import '../App.css';
import MyCitations from "./Citations";
import { Header,
    Nav, 
    Menu, 
    ResponsiveContext,
    Anchor } from 'grommet';


function HeaderNav() {

  const posts = [
    {title: '"Une vie sans examen ne vaut pas la peine d’être vécue" (Socrate - 399 av. J.-C)'},
    {title: '"Quelle que soit la douleur, un patient est impatient." (Kheira Chakor)'},
    {title: '"L’interprétation des rêves est la voie royale de la connaissance de l’inconscient." (Sigmund Freud - 1856–1939)'},
    {title: '"L’enfer, c’est les autres." (Jean-Paul Sartre - 1905–1980)'},
    {title: '"Le désir est l’appétit accompagné de la conscience de lui-même." (Spinoza - 1632–1677)'},
    {title: '"Carpe diem." (Horace - 65 av. J.-C.)'},
    {title: '"L’étendue est la marque de ma puissance. Le temps est la marque de mon impuissance." (Jules Lagneau - 1851–1894)'}
  ];

  const scrollToRef = (ref) => window.scrollTo({ behavior: 'smooth' },0, ref.current.offsetTop);
  const executeScroll = () => scrollToRef("skills");

    return (
      <>
      <Header background="dark-1" pad="medium">
        <MyCitations posts={posts} />
        <ResponsiveContext.Consumer>
          {responsive =>
            responsive === 'small' ? (
              <Menu
                label="Menu"
                items={[
                  { label: 'Accueil', onClick: () => {window.scrollTo({ top: 0 })} },
                  { label: 'Compétences', onClick: ({executeScroll}) => {} },
                  { label: 'Education', onClick: () => {} },
                  { label: 'Expériences', onClick: () => {} },
                  { label: 'Contact', onClick: () => {window.scrollTo({ bottom: 0 })} },
                ]}
              />
            ) : (
              <Nav direction="row">
                <Anchor href="#" label="Accueil" />
                <Anchor href="#" label="Compétences" />
                <Anchor href="#" label="Education" />
                <Anchor href="#" label="Expériences" />
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