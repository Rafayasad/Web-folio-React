import react from 'react';
import React from 'react';
import './App.css';
import {Header,Headcolor} from './components/header';
import Nametitle from './components/nametitle';
import ConnectWithSocial from './components/connectWithSocial';
import Personalinfo from './components/personalinfo';
import Skills from './components/skills';
import Experience from './components/experience';


class App extends react.Component{
  render(){
    return(
      <div>
      <Header />
      <Headcolor />
      <Nametitle /><br /><br /><br />
      <ConnectWithSocial /><br /><br />
      <Personalinfo /><br /><br />
      <Skills /><br />
      <Experience />

      </div>
    )
  }
}




export default App;
