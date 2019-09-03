import React, {Component} from 'react'
import './login.css'
import Form from './Form'
import {Route,Link} from 'react-router-dom'

const Header = (props) => <div>{props.title} {props.name}</div>


export default class Login extends Component{
    constructor(props){
        super(props)
    }
    render(){
        // console.log('the props information is',this.props)
        return(
        <div>
            
            <div className='container'>
                <img className='logo-top' src={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'} />
                <Header title='Sign in' name={this.props.name}/>
                <Form/>
            </div>
        </div>
        )
    }
}