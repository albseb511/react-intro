import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export default class Navbar extends Component{
    render(){
        return(
            <div className='navbar'>
                <div><Link to='/'>Home</Link></div>
                <div><Link to='/about'>About</Link></div>
                <div><Link to='/contact'>Contact</Link></div>
                <div><Link to='/user1'>User 1</Link></div>
                <div><Link to='/user2'>User 2</Link></div>
            </div>
        )
    }
}