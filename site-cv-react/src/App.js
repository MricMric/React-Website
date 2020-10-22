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
import MyExperiences from "./components/Experiences";


function App() {
  return (

  <Grommet theme={hpe}>
    <MyHeader/>
      <MyProfil/>
        <MySkills/>
        <MyMain/>
        <MyEducation/>
        <hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .5,
    borderColor : '#000000',
    width : '50%'
}}/>
        <MyExperiences/>
      <MyFooter/>
  </Grommet>
   
  );
}

export default App;
