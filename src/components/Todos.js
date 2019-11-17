import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
export class Todos extends Component {
  state = {  }

  render() {
    return this.props.todos.map( todo=>{
      return(
       <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    )});
  }
};
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}
 
export default Todos;