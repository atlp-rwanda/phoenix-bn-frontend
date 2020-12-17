import { combineReducers } from 'redux'
import counterReducer from './counter'
import userReducer from './users'

const combinedReducers = combineReducers({
    counter:counterReducer,
    user:userReducer
})

export default combinedReducers;