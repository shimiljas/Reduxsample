import React, { Component,useState } from 'react'
import {connect} from 'react-redux'
import {createpost,clearAll} from '../action'
import { useDispatch } from 'react-redux'

const AddPost=()=>{
    const dispatch = useDispatch()
    const [post,setPost]=useState('')
    const callPostApi=()=>{
        dispatch(createpost(post))
        setPost('')
    }
    const clearall=()=>{
        dispatch(clearAll());
    }
   
   return(
       <div>
           <input
             value={post}
             placeholder={'Please enter the title'}
             onChange={e=>setPost(e.target.value)}
           />
           <button onClick={callPostApi}>post</button>


           <button onClick={clearall}>Clear All</button>
       </div>
   )
}

export default AddPost