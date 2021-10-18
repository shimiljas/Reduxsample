import {ADD_TODO,TOGGLE_TODO,CLEAR_TODO} from '../action'
import { v4 as uuidv4 } from 'uuid';
const intialState=[]
const todo=(state=intialState,action)=>{
    // console.log(action,"action")
    switch(action.type){
       case ADD_TODO:
           return [
                ...state,
               {
                   text:action.payload,
                   id:uuidv4(),
                   completed:false
               }
           ]
        case TOGGLE_TODO:
            console.log(action.payload)
            return state.map(item=>{
                if(item.id===action.payload) item.completed=true
                return item
            });
        case CLEAR_TODO:
            return intialState        
        default:
            return state
    }
    
}

export default todo