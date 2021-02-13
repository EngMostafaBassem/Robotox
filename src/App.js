import './App.css';
import React, { Component } from 'react'
import CardList from "./Components/CardList/CardList.component";
import Card from './Components/Card/Card.component'
import Search from "./Components/Search/Search.component";
class App extends Component{

    constructor(){
      super()
      this.state={robots:[],searchText:""}
    }
    componentDidMount(){
     fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json())
     .then(data=>this.setState({robots:data}))
    }
    changeText=(name)=>{
      this.setState({searchText:name})
     }
  render(){
   
    let filterdSearch=(this.state.searchText=='')?[...this.state.robots]:this.state.robots.filter(robot=>robot.name.toLowerCase().includes(this.state.searchText.toLowerCase()))  
    return(
      <div>
        <h1 className="title">Robotox</h1>
        <Search changeText={this.changeText} />
        <CardList>
        {
         filterdSearch.map(robot=><Card key={robot.id} robot={robot}/>)
        }
        </CardList>
      </div>
    )
  }
}
export default App
