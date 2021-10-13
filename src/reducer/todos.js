import {ADD_TODO} from '../action'
let id=1
const todo=(state=[],action)=>{
    // console.log(action,"action")
    switch(action.type){
       case ADD_TODO:
           return [
                ...state,
               {
                   text:action.payload,
                   id:++id,
                   completed:false
               }
           ]
        default:
            return state
    }
    
}

export default todo