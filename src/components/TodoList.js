import React, { Component } from 'react'
import {connect } from 'react-redux'
import {ToggleTodo} from '../action'
class TodoList extends Component{
    render(){
        console.log(this.props.todos)
        return(
            <div>
            <ul>
                {this.props.todos.map(item=>(
                    <div key={item.id}>
                     <li >{item.text}</li>
                     {!item.completed? <button onClick={()=>this.props.ToggleTodo(item.id)}>Complete</button>:null}
                    </div>
                ))}
            </ul>
            </div>
                
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        todos:state.todos
    }
}

export default connect(mapStateToProps,{ToggleTodo})(TodoList)