import React, { Component } from 'react';
import PropTypes from "prop-types";
class TodoItem extends Component {
    state = {  }
    getStyle = () =>{
        if(this.props.todo.completed)
        {return{
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted'
            textDecoration:'line-through'}}
            else{
                return {
                    textDecoration:"none"
                }
                
            }
        
        
        
                }
    render() { 
        
        return (  
<div style={this.getStyle()}>
<p>{ this.props.todo.title }</p>
</div>

        );
    }
}
TodoItem.propTypes={
    todos: PropTypes.array.isRequired
  }

   
 
export default TodoItem;