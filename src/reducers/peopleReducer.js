/**
 * Created by Surajit Sarkar on 31/10/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */
import { ADD_PERSON, DELETE_PERSON } from '../actions/constants';

//people structure : [{name:name}]

export default function peopleReducer(state = [], action) {
    switch (action.type) {
        case ADD_PERSON:
            return [...state, {name:action.person.name}];
        case DELETE_PERSON:
            return state.filter(p => p.name !== action.person.name)
        default:
            return state;
    }
}