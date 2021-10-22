import React,{ useReducer } from 'react';

import {
    intialState,
    AUTH_STATE_CHANGE,
    reducer
} from './Reducer'

export const AuthContext=React.createContext();


export const AuthProvider=(props)=>{
    const [authState,dispatch]=useReducer(reducer,intialState)
    const actions={
        authStateChange:(user)=>{
            dispatch({type:AUTH_STATE_CHANGE,payload:user})
        }
    }


     return(
         <AuthContext.Provider value={{
             authState:authState,
             authAction:actions
         }}>
           {props.children}  
         </AuthContext.Provider>
     )

}

