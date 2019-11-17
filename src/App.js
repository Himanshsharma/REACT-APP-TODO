import React, { Component } from 'react';
import "./App.css"
import Todos from "./components/Todos";
class App extends Component {
  state = { 
todos:[{
  id:1,
  title:"take out the crash",
  completed:false,
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
   // toggle completed todo
 markComplete=(id)=>{
  this.setState({todos:this.state.todos.map(todo=>{
    if(todo.id===id){
      todo.completed=!todo.completed
    }
    return todo
  })})

 }  
  render() { 
    return ( 
<div className="App">
      <h1>APP</h1>
      <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      
      </div>
     );
  }
}
 
export default App;
