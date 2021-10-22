
export const intialState={
    user:null
}

export const AUTH_STATE_CHANGE='AUTH_STATE_CHANGE';

export const reducer=(state,action)=>{
    switch(action.type){
        case AUTH_STATE_CHANGE:
            console.log("action",action)
            return {
                user:action.payload
            }
        default:
            return state    

    }
 
}