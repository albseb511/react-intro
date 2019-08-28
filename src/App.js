import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/profile/Profile'


const follow = (name='default',count=0)=> {
  console.log('Followed:',name,'Total followers:',count)
}

function App() {
  return (
      <div>
          <Profile src='https://avatars1.githubusercontent.com/u/9168716?s=400&v=4' 
                    name='Mohammed Tanveer' 
                    user='tanveer86' 
                    location=' Bangalore, India' 
                    count={100}
                    follow={(a,b)=>follow(a,b)}  />
          <Profile src='https://avatars2.githubusercontent.com/u/53760280?s=460&v=4' 
                  name='Suraj Singh' 
                  user='Suraj10074' 
                  location='' 
                  count={50}
                  follow={(a,b)=>follow(a,b)}  />
      </div>
  );
}

export default App;
