import React, { Component,useEffect } from 'react'
import {connect } from 'react-redux'
import {getpost} from '../action'
import { useDispatch,useSelector } from 'react-redux'

const PostList=()=>{
    const dispatch = useDispatch()
    const data=useSelector(state=>state.post)
    
    useEffect(()=>{
        dispatch(getpost());
    },[
    ])
    console.log(data,"data")
  if(data.loader) return null
   return <div>
        <ul>
          {data.post.map(item=>(<li>{item.title}</li>))}
        </ul>
  </div>
}

export default PostList