import React from 'react'
import { tsThisType } from '@babel/types';



export default class Clock extends React.Component{
    constructor(props){
        super(props)
        console.log('constructor called')
        this.state={
            time:0
        }
    }

    increment = () => this.setState({time:this.state.time+1})

    componentDidMount(){
        console.log('component mounted')
        this.timer = setInterval(this.increment,1000)
    }

    componentWillUnmount(){
        console.log('component unmounted')
        clearInterval(this.timer)
    }

    

    render(){
        return(
            <div>Time: {this.state.time}</div>
        )
    }
}