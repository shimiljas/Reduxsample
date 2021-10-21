import React,{useEffect, useState} from 'react'
import {
    useParams
  } from "react-router-dom";

  import { useDispatch } from 'react-redux'
import {postId} from '../action'
import {useSelector} from'react-redux'


const PostDetail=()=>{
  const data=useSelector(state=>state.post)
  const todos=useSelector(state=>state.todos)
    const dispatch = useDispatch()
    let { id } = useParams();
    useEffect(()=>{
      dispatch(postId(id))
    },[])// componentDidMOunt
   console.log(todos,"auth-------<>")
   if(!data.postdetail) return null
  
    return(
        <div>
        {data.postdetail.title}
        </div>
    )

}
export default PostDetail