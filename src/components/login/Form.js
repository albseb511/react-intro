import React, {Component} from 'react'
import './login.css'
import Clock from './Clock'
import {Route,Redirect} from 'react-router-dom'

const Header = (props) => <div className='label'>{props.title}</div>

const Dash = (props) => {return(<div>
                                    <button className='btn-login' onClick={()=>props.signout()}>
                                        SIGN OUT
                                    </button>
                                    <Clock/>
                                    <div>
                                        HEY YOU ARE LOGGED IN
                                    </div>
                                </div>)}
 
const LoginButton = (props) => {return(<button className='btn-login' onClick={()=>props.click()}>LOG IN</button>)}

export default class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            userName:'',
            password:'',
            auth:false,
    
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
                auth:true,
                
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



    tick = () => {
        this.setState({time: this.state.time+1})
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
                    (<Redirect to='/dash'/>):
                     (<Redirect to='/loginButton'/>)}
                    
                <Route path='/dash' render={()=>{return(<Dash signout={()=>this.handleSignOut()} />)}} />
                <Route path='/loginButton' render={()=>{return(<LoginButton click={()=>this.handleClick()} />)}} />
                </div>
                
            </div>
        )
    }
}