import React from "react";
import { ReactDOM, Component } from "react";
import "./App.css"
import { CardLists } from "./components/classLists/cardLists.component";
import {SearchBox} from "./components/searchBox/search.component"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      monsters : [],
      searchField : ""
    }
  }
  componentDidMount(){
    const respones = fetch("https://jsonplaceholder.typicode.com/users").then(respones=> respones.json())
    .then(user => this.setState({monsters : user}))
  }

  handleChange= (e)=>{
    this.setState({searchField : e.target.value})
  }

  render(){

   
    const {monsters, searchField} = this.state;
    //filters the search for monsters uses the filter function
    const filteredMonster = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className="App">
        <h1 className="title-font">Monsters University</h1>
     
        <SearchBox
        placeholder="Search Monsters" 
        handleChange = {this.handleChange}/>

        <CardLists monster={filteredMonster} >
       
        </CardLists>
       <button onClick={()=>this.setState({monster: [{name : "nikhil", id: "3"}, {name : "soniya", id: "4"}]})}>Update</button>
      </div>
    )
  }
}
export default App;
