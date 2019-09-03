import React from 'react'
import './Profile.css'


export default class Profile extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.data)
    }


    render(){
        return(
            <div>
                <img className='img' src={this.props.data.src} />
                <div className='Name'>{this.props.data.name}</div>
                <div className='userId'>{this.props.data.user}</div>
                <button className='btn'>Follow : Total={this.props.data.count}</button>
                <div className='location'>{this.props.data.location}</div>
            </div>
        )
    }
}

