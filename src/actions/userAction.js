/**
 * Created by Surajit Sarkar on 1/11/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */

import HttpClient from '../api/httpClient'

export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_FINISHED = 'FETCH_USER_FINISHED';
export const SELECT_USER = 'SELECT_USER';

export function fetchUser() {
    return {
        type: FETCH_USER
    };
}

export function fetchUserCompleted(data) {
    return {
        type: FETCH_USER_FINISHED,
        data:data
    }
}

export function selectUser(id) {
    return {
        type: SELECT_USER,
        data: id
    }
}

export function getUser() {
    return(dispatch,getState)=>{
        dispatch(fetchUser());
        client = new HttpClient();
        client.get("https://jsonplaceholder.typicode.com/users",false)
            .then((data)=>{
                dispatch(fetchUserCompleted(data))
            })
            .catch((err)=>console.log(err))
    }
}