import {
    POST_LIST_REQUEST,
    POST_LIST_SUCCESS,
    POST_LIST_FAILURE,
    POST_SUCCESS,
    DELETE_POST,
    CLEAR_ALL
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
         case POST_SUCCESS:
             console.log(action.payload,"action.payload")
             return {
                 ...state,
                 post:[action.payload,...state.post]
             }
        case  DELETE_POST:
            return{
                ...state,
                post:state.post.filter(item=>item.id!=action.payload)
            }  
        case CLEAR_ALL:
            return intialState      

       default:
           return state;    
    }

}
export default post
