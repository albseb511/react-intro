import React, {Component} from 'react'
import './login.css'
import Form from './Form'
import {Route,Link} from 'react-router-dom'

const Header = (props) => <div>{props.title}</div>


export default class Login extends Component{
    render(){
        return(
        <div>
            
            <div className='container'>
                <img className='logo-top' src={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'} />
                <Header title='Sign in'/>
                <Form/>
            </div>
        </div>
        )
    }
}