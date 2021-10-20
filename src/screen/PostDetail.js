import React,{useEffect, useState} from 'react'
import {
    useParams
  } from "react-router-dom";

  import { useDispatch } from 'react-redux'
import {postId} from '../action'

const PostDetail=()=>{
    const dispatch = useDispatch()
    let { id } = useParams();
    useEffect(()=>{
      dispatch(postId(id))
    },[])// componentDidMOunt
   
  
    return(
        <div>
         post detail
        </div>
    )

}
export default PostDetail