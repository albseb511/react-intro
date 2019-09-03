import React from 'react';
import './App.css';
// import List from './components/profile/List'
import Login from './components/login/Login'
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/login/navbar'

const About = () =>{
  return <div>This is the about page!</div>
}

const Contact = () =>{
  return <div>This is the contact page!</div>
}



function App() {
  return (
      <BrowserRouter>
          <Navbar/>
          {/* <Login/> */}
          <Route exact path = "/"  component = {Login} />
          <Route  path = "/about" component = {About} />
          <Route  path = "/about/about" component = {About} />
          <Route  path = "/contact" component = {Contact} />
      </BrowserRouter>
  );
}

export default App;
