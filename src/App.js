import React from "react";
import { ReactDOM, Component } from "react";
import "./App.css"

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
      
        {this.state.monster.map(user => <h1 key={user.id}> {user.name}</h1>)} 

       <button onClick={()=>this.setState({monster: [{name : "nikhil", id: "3"}, {name : "soniya", id: "4"}]})}>Update</button>
      </div>

    )
  }
}
export default App;
