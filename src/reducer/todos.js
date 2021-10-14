import {ADD_TODO,TOGGLE_TODO} from '../action'
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
        case TOGGLE_TODO:
            console.log(action.payload)
            return state.map(item=>{
                if(item.id===action.payload) item.completed=true
                return item
            });    
        default:
            return state
    }
    
}

export default todo