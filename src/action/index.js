export const ADD_TODO='ADD_TODO'


export const addTodo=(content)=>{
    return {
        type:ADD_TODO,
        payload:content
    }
}