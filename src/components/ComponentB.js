import React,{useState,useReducer,useContext} from 'react'
import {AuthContext,ThemeContext,EmailContext} from '../screen/UseReducer'

const ComponentB=()=>{
    const data=useContext(AuthContext)
    const theme=useContext(ThemeContext)
    const value=useContext(EmailContext)
    console.log(data,theme,value)
    return(
        <div>{data.email}{value}</div>
    )
}

export default ComponentB