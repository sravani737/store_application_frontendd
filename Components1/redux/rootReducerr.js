import {combineReducers} from 'redux'
import {reducer} from './reducer'
import {userReducer} from './reducer'


export default combineReducers({
    reducer,
    // user:userReducer
})