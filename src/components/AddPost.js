import React, { Component,useState } from 'react'
import {connect} from 'react-redux'
import {createpost} from '../action'
import { useDispatch } from 'react-redux'

const AddPost=()=>{
    const dispatch = useDispatch()
    const [post,setPost]=useState('')
    const callPostApi=()=>{
        dispatch(createpost(post))
    }
   
   return(
       <div>
           <input
             value={post}
             placeholder={'Please enter the title'}
             onChange={e=>setPost(e.target.value)}
           />
           <button onClick={callPostApi}>post</button>
       </div>
   )
}

export default AddPost