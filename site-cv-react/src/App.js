import React from 'react';
import './App.css';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';

import MyHeader from "./components/Header";
import MyFooter from "./components/Footer";
import MyProfil from "./components/Profil";
import MyMain from "./components/Main";
import MySkills from "./components/Skills";
import MyEducation from "./components/Education";


function App() {
  return (

  <Grommet theme={hpe}>
    <MyHeader/>
      <MyProfil/>
        <MyMain/>
        <MySkills/>
        <MyEducation/>
      <MyFooter/>
  </Grommet>
   
  );
}

export default App;
