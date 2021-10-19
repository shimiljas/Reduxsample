import React, { Component,useEffect } from 'react'
import {connect } from 'react-redux'
import {getpost,deleteItem} from '../action'
import { useDispatch,useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
const PostList=(props)=>{
    const dispatch = useDispatch()
    const history = useHistory();
    const data=useSelector(state=>state.post)
    
    useEffect(()=>{
        dispatch(getpost());
    },[
    ])
    console.log(data,"data")
  if(data.loader) return null
   return <div>
        <ul >
          {data.post.map(item=>(
          <li key={item.id}>
            {item.title} {"  "}
            <button onClick={()=>props.deleteItem(item.id)}>Delete</button>
            <button onClick={()=> history.push(`/post/${item.id}`)}>Detail</button>
          </li>))}
        </ul>
  </div>
}
const mapDispatchToProps=(dispatch)=>{
    return{
      deleteItem:(id)=>dispatch(deleteItem(id))
    }
}



export default connect(null,{deleteItem})(PostList)