import React from 'react'
import './Profile.css'


export default class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            src:this.props.src,
            name:this.props.name,
            user:this.props.user,
            location:this.props.location,
            count:this.props.count
        }
    }

    handleOnClick = ()=> {
        
        this.setState({
            count: this.state.count+1
        })

        this.props.follow(this.state.name,this.state.count)
    }

    render(){
        return(
            <div>
                <img className='img' src={this.state.src} />
                <div className='Name'>{this.state.name}</div>
                <div className='userId'>{this.state.user}</div>
                <button className='btn' onClick={()=>this.handleOnClick()}>Follow : Total={this.props.count}</button>
                <div className='location'>{this.state.location}</div>
            </div>
        )
    }
}

