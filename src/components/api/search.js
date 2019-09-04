import React from 'react';
import Profile from '../profile/Profile'

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:'',
            data:'',
            status:false
        }
    }

    handleClick = () => {
        if(!this.state.value){
            alert('empty input')
            return 0
        }
        console.log(`Handle click called, and value = ${this.state.value}`)
        fetch(`https://api.github.com/search/users?q=${this.state.value}`)
        .then(response=>response.json())
        .then(data=>this.setState({data:data.items,
                                    status:true}))
    }

    render(){
        console.log(this.state.data)
  return (
      <div style={{margin:200}}>
          API PAGE
          <div>
            <input value={this.state.value} onChange={(e)=>this.setState({value:e.target.value})}></input>
            <button onClick={()=>this.handleClick()}>Search</button>
          </div>
          <div>
              {this.state.status?
                    (<div>{this.state.data.map((item,index)=>{
                        return(
                            <div key={index}>{item.login} <img src={item.avatar_url} style={{width:100}}/> </div>
                        )
                    })}</div>):
                    (<div>Empty</div>)}
          </div>

      </div>
  );
    }
}

export default Search;
