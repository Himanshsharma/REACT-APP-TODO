import React, { Component } from 'react';
import { throwStatement } from '@babel/types';
class AutoTodo extends Component {
    state = { title:"" }
    onChange=(e)=>{
        this.setState({title:e.target.value});
    }
    onSubmit=(e)=>{
        e.preventDefault();
        throwStatement.props.todo(this.state.title);
        this.setState({title : " "})
    }
    render() { 
        return (
            
            <form onSubmit={this.onSubmit} style={{display:'flex',height:'70px'}}>

            <input type="text" name="title" placeholder="add todo" style={{flex:'10',width:'90%',padding:'5px'}} value={this.state.title} onChange={this.onChange}></input>
            <input type="submit" value="submit" classNmae="btn" style={{flex:'1'}}></input>
            
            
            </form>  );
    }
}
 
export default AutoTodo;