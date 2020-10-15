import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Header, Main, Heading, Paragraph,Button, Sidebar, Nav, Menu, Avatar, Box, Button as GrommetButton, Grommet } from 'grommet';
import { Home, Projects, Clock, Help} from 'grommet-icons';
import { hpe } from 'grommet-theme-hpe';

function App() {
  return (
    <Grommet theme={hpe} themeMode="dark">
  
  <Box pad="large" background="doc" />
</Grommet>

    
  );
}

export default App;
