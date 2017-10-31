/**
 * Created by Surajit Sarkar on 31/10/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */
import { ADD_PERSON, DELETE_PERSON } from '../constants';

export function addPerson(person) {
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