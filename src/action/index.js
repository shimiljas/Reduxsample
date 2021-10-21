
import { createAction } from 'redux-actions';

export const ADD_TODO='ADD_TODO'
export const TOGGLE_TODO='TOGGLE_TODO'
export const CLEAR_TODO='CLEAR_TODO'

// post action type
export const POST_REQUEST='POST_REQUEST'
export const POST_SUCCESS='POST_SUCCESS'
export const POST_FAILURE='POST_FAILURE'

export const POST_LIST_REQUEST='POST_LIST_REQUEST'
export const POST_LIST_SUCCESS='POST_LIST_SUCCESS'
export const POST_LIST_FAILURE='POST_LIST_FAILURE'

export const DELETE_POST='DELETE_POST'

export const CLEAR_ALL='CLEAR_ALL'
export const POST_ID='POST_ID'

export const POST_DETAIL_SUCCESS='POST_DETAIL_SUCCESS'
export const POST_DETAIL_FAILURE='POST_DETAIL_FAILURE'






export const addTodo=(content)=>{
    return {
        type:ADD_TODO,
        payload:content
    }
}

export const ToggleTodo=(id)=>{
    return{
        type:TOGGLE_TODO,
        payload:id
    }

}

export const clearTodo=()=>{
    return {
        type:CLEAR_TODO
    }
}



/// post action


export const createpost=(title)=>(dispatch)=>{
    let body= {
        method: 'POST',
        body: JSON.stringify({
          title:title,
          body: 'sample',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    }
    dispatch({type:POST_REQUEST})
        fetch('https://jsonplaceholder.typicode.com/posts',body)
         .then(res=>res.json())
         .then(response=>{
            dispatch({type:POST_SUCCESS,payload:response})
         })
         .catch(err=>{
            dispatch({type:POST_FAILURE})
     })
}

export const getpost=()=>(dispatch)=>{
        dispatch({type:POST_LIST_REQUEST})
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(response=>{
            dispatch({type:POST_LIST_SUCCESS,payload:response})
         }).catch(err=>{
            dispatch({type:POST_LIST_FAILURE})
      })
}


export const deleteItem=(id)=>{
    return {
        type:DELETE_POST,
        payload:id
    }
}

export const clearAll=()=>{
    return {
        type:CLEAR_ALL
    }
}




export const postId = createAction(POST_ID);

// postId() {type:'POST_ID'}
// postId(10) {type:'POST_ID',payload:10}
// postId([10,11,12]){type:'POST_ID',payload:[10,11,12]}
// export const postId=(id)=>{
//     return{
//         type:POST_ID,
//         payload:id
//     }
// }