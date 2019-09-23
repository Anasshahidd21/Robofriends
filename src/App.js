import React, { Component } from 'react'
// import {robots} from './components/robots'
import CardList from './components/CardList';
import SearchBox from './components/SearchBox'
import './App.css'


class App extends Component{

    constructor() {
        super()
    
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(Response=>{
            Response.json();
        })
        this.setState({robots:robots})
    }

onSearchChange=(event)=>{

    this.setState({
        searchField: event.target.value
    })

}
   render(){
    const filtered = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
        return (
            <div className = "tc">
                <h2 className=" b  mb2 pa3 ">RoboFriends</h2>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots = {filtered}/>
            </div>
        )
    } 
}

export default App;


