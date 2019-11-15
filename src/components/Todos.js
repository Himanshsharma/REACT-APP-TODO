import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
export class Todos extends Component {
  state = {  }
  render() { 
  
    return this.props.todos.map( todo=>{
      return(
       <TodoItem key={todo.id} todo={todo}/>
    )});
  }
};
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}
 
export default Todos;