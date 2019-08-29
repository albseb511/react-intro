import React, {Component} from 'react'
import './login.css'

const Header = (props) => <div className='label'>{props.title}</div>

export default class Form extends Component{
    render(){
        return(
            <div className='form'>
                <Header title='Username'/>
                <input type='text'></input>

                <Header title='Password'/>
                <input type='text'></input>
                <div>
                    <button className='btn-login'>LOG IN</button>
                </div>
            </div>
        )
    }
}