import { combineReducers } from 'redux'
import todos from './todos'
import post from './post'
const reducer=combineReducers({
    todos,
    post
})

export default reducer