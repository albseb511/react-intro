import React from 'react'


// Mounting

// These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

//     constructor()
//     static getDerivedStateFromProps()
//     render()
//     componentDidMount()

export default class Clock extends React.Component{
    constructor(props){
        super(props)
        console.log('constructor called')
        this.state={
            time:0
        }
    }

    increment = () => this.setState({time: this.state.time + 1})

    componentDidMount(){
        console.log('component mounted')
        this.timer = setInterval(this.increment,1000)
    }

    componentWillUnmount(){
        console.log('component unmounted')
        clearInterval(this.timer)
    }

    componentDidUpdate(){
        console.log('Component did update called')
    }
    

    render(){
        console.log('render called')
        return(
            <div>Time: {this.state.time}</div>
        )
    }
}