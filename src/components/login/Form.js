import React, {Component} from 'react'
import './login.css'
const Header = (props) => <div className='label'>{props.title}</div>


export default class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            userName:'',
            password:'',
            auth:false,
            data:'',
            dataCollect:false
        }
    }

    handleNameChange = (e) => {
        
        this.setState({
            userName:e.target.value
        })
    }


    handleClick = () => {
        if(this.state.userName==='masai_school'&&this.state.password==='password'){
            alert('true')
            this.setState({
                auth:true
            })
        }
        else
            alert('wrong credentials')
    }
    handleSignOut = () => {
        this.setState({
            auth:false
        })
    }


    render(){
        return(
            <div className='form'>
                <Header title='Username'/>
                <input onChange={(e)=>this.handleNameChange(e)} value={this.state.value} type='text'></input>

                <Header title='Password'/>
                <input type='password' onChange={(e)=>this.setState({password:e.target.value})}></input>
                <div>
                {this.state.auth?
                    (<div>
                        <div>{this.state.data}</div>
                        <button className='btn-login' onClick={()=>this.handleSignOut()}>
                            SIGN OUT
                        </button>
                        <div>
                            HEY YOU ARE LOGGED IN
                        </div>
                     </div>):
                     (<button className='btn-login' onClick={()=>this.handleClick()}>LOG IN</button>)}
                    
                </div>
                
            </div>
        )
    }
}