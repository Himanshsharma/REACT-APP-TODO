import React, { Component } from 'react';
import "./App.css"
import Header from './components/layout/Header.js';
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
 delTodo=(id)=>{
   this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]});



 }
  render() { 
    return ( 
<div className="App">
      <Header></Header>
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      
      </div>
     );
  }
}
 
export default App;
