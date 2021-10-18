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


export const createpost=(title)=>{
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
    return dispatch => {
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
}

export const getpost=()=>{
    return dispatch => {
        dispatch({type:POST_LIST_REQUEST})
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(response=>{
           dispatch({type:POST_LIST_SUCCESS,payload:response})
         }).catch(err=>{
            dispatch({type:POST_LIST_FAILURE})
         })
    }
}