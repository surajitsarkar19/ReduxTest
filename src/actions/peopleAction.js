/**
 * Created by Surajit Sarkar on 1/11/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */
import { ADD_PERSON, DELETE_PERSON } from './constants';

export function fetchUser(person) {
    return {
        type: ADD_PERSON,
        person,
    };
}

export function deletePerson(person) {
    return {
        type: DELETE_PERSON,
        person,
    };
}