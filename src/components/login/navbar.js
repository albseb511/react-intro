import React, {Component} from 'react'
import {Route,Link} from 'react-router-dom'

const Header = (props) => <div>{props.title}</div>


export default class Navbar extends Component{
    render(){
        return(
            <div className='navbar'>
               <div><Link to="/">Home</Link></div>
                <div><Link to="/about">About</Link></div>
                <div><Link to="/contact">Contact</Link></div>
            </div>
        )
    }
}