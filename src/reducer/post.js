import {
    POST_LIST_REQUEST,
    POST_LIST_SUCCESS,
    POST_LIST_FAILURE
} from '../action'
 
const intialState={loader:false,post:[]}
const post=(state=intialState,action)=>{
    switch(action.type){
        case POST_LIST_REQUEST:
            return {...state,loader:true}
        case  POST_LIST_SUCCESS:
            console.log(action.payload)
            return {...state,loader:false,post:action.payload}  
        case POST_LIST_SUCCESS:
                return {...state,loader:false} 

       default:
           return state;    
    }

}
export default post
