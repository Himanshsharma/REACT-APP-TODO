import React, { Component } from 'react';
import "./App.css"
import Todos from "./components/Todos";
class App extends Component {
  state = { 
todos:[{
  id:1,
  title:"take out the crash",
  completed:true,
},
{
  id:2,
  title:"take out the crash",
  completed:false,
},
{
  id:3,
  title:"take out the crash",
  completed:false,
}]



   }
  render() { 
    return ( 
<div className="App">
      <h1>APP</h1>
      <Todos todos={this.state.todos}/>
      
      </div>
     );
  }
}
 
export default App;
