import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../action'
class AddTodo extends Component{
    constructor(props){
        super(props);
        this.state={
            input:''
        }
    }
    handleAddTodo=()=>{
        if(!this.state.input) return;
        console.log(this.state.input,"input")
        this.props.addTodo(this.state.input)
        this.setState({input:''})
    }

    render(){
        return(
            <div>
             <input
               placeholder="Enter todo"
               onChange={e=>this.setState({input:e.target.value})}
               value={this.state.input}
             />
             <button onClick={this.handleAddTodo}>
                 Add
             </button>

            </div>
        )
    }
}

// const mapDispatchToProps=(dispatch)=>{
//     return{
//         addTodo:(text)=>dispatch(addTodo(text))
//     }
// }

export default connect(null,{addTodo})(AddTodo)