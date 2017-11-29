/**
 * Created by Surajit Sarkar on 31/10/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */
import { combineReducers } from "redux"
import people from './peopleReducer'
import user from './userReducer'
import todo from './todoListReducer'

// glue all the reducers together
export default combineReducers({
    people,
    user,
    todo,
})