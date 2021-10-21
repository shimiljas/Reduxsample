import React,{useState,useReducer} from 'react'
import ComponentB from '../components/ComponentB'
const intialState={count:1}

const reducer=(state,action)=>{
    console.log(action,"action")
    switch(action.type){
       case 'INCREMENT':
           return {...state,count:state.count+1}
       case 'DECREMNET':
            return {...state,count:state.count-1}
       case 'RESET':
                return intialState    
       default:
         return state;
    }
    
}

const ComponentA=()=>{
    const [state,dispatch]=useReducer(reducer,intialState)
    console.log(state)
    return(
        <div>
            {state.count}
            <div>
              <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
              <button onClick={()=>dispatch({type:'DECREMNET'})}>Decremnet</button>
              <button onClick={()=>dispatch({type:'RESET'})}>reset</button>
              </div>

            {/* <ComponentB/> */}
        </div>
    )
}

export default ComponentA