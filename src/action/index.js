export const ADD_TODO='ADD_TODO'
export const TOGGLE_TODO='TOGGLE_TODO'


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