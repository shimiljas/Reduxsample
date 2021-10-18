import React,{useState} from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import { useDispatch } from 'react-redux'
import {clearTodo} from '../action'
const Todo=()=>{
    const dispatch = useDispatch()
    return(
      <div>
          <AddTodo/>
          <TodoList/>
          <button onClick={()=>dispatch(clearTodo())}>Clear</button>
      </div>
    )
}

export default Todo