import React, { Component } from 'react';
class AutoTodo extends Component {
    state = { title:"" }
    onChange=(e)=>{
        this.setState({title:e.target.value});
    }
    render() { 
        return (
            
            <form style={{display:'flex',height:'70px'}}>

            <input type="text" name="title" placeholder="add todo" style={{flex:'10',width:'90%',padding:'5px'}} value={this.state.title} onChange={this.onChange}></input>
            <input type="submit" value="submit" classNmae="btn" style={{flex:'1'}}></input>
            
            
            </form>  );
    }
}
 
export default AutoTodo;