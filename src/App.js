import React from 'react';
import './App.css';
// import List from './components/profile/List'
import Login from './components/login/Login'
import Navbar from './components/login/navbar'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import List from './components/profile/List';

const About = () => <div>This is the about page</div>
const Contact = () => <div>This is the Contact page</div>
const NotFound = () => <div>Page Not Found</div>
function App() {
  return (
      <BrowserRouter>
          <Navbar/>
          {/* <Login/> */}
          <Switch>
            <Route path='/' render={(props)=><Login name='Masai' {...props}/>}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route exact path='/user:id' render={(props)=><List {...props}/>}/>
            <Route component={NotFound}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;
