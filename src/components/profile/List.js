import React from 'react';
import Profile from './Profile'


const follow = (name='default',count=0)=> {
  console.log('Followed:',name,'Total followers:',count)
}

class List extends React.Component {
    constructor(props){
        super(props);
        this.state={
            val1:100,
            val2:50
        }
    }
    render(){
  return (
      <div>
          <Profile src='https://avatars1.githubusercontent.com/u/9168716?s=400&v=4' 
                    name='Mohammed Tanveer' 
                    user='tanveer86' 
                    location=' Bangalore, India' 
                    count={this.state.val1}
                    follow={(a,b)=>follow(a,b)}  />
          <Profile src='https://avatars2.githubusercontent.com/u/53760280?s=460&v=4' 
                  name='Suraj Singh' 
                  user='Suraj10074' 
                  location='' 
                  count={this.state.val2}
                  follow={(a,b)=>follow(a,b)}  />
            <button onClick={()=>this.setState({val2:this.state.val2+1,val1:this.state.val1+1})}>Increase val2: {this.state.val2}</button>
      </div>
  );
    }
}

export default List;
