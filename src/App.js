import React from 'react';
import './App.css';
// import List from './components/profile/List'
import Login from './components/login/Login'
import Navbar from './components/login/navbar'

import { BrowserRouter,Route } from 'react-router-dom'

const About = () => <div>This is the about page</div>
const Contact = () => <div>This is the Contact page</div>

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
          {/* <Login/> */}
          <Route exact path='/' component={Login}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
      </BrowserRouter>
  );
}

export default App;
