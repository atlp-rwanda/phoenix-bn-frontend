import { combineReducers } from 'redux'
import auth from './users'

const combinedReducers = combineReducers({
    auth,
})

export default combinedReducers;