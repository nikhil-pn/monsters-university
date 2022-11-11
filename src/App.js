import React from "react";
import { ReactDOM, Component } from "react";
import "./App.css"
import { CardLists } from "./components/classLists/cardLists.component";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      monster : []
    }
  }
  componentDidMount(){
    const respones = fetch("https://jsonplaceholder.typicode.com/users").then(respones=> respones.json())
    .then(user => this.setState({monster : user}))
  }

  render(){
    return(
      <div className="App">
        <CardLists monster={this.state.monster} >
       
        </CardLists>
       <button onClick={()=>this.setState({monster: [{name : "nikhil", id: "3"}, {name : "soniya", id: "4"}]})}>Update</button>
      </div>
    )
  }
}
export default App;
