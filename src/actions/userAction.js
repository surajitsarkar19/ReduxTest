/**
 * Created by Surajit Sarkar on 1/11/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */

import HttpClient from '../api/httpClient'

export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_FINISHED = 'FETCH_USER_FINISHED';
export const SELECT_USER = 'SELECT_USER';

function fetchUserAction() {
    return {
        type: FETCH_USER
    };
}

function fetchUserCompletedAction(data) {
    return {
        type: FETCH_USER_FINISHED,
        data:data
    }
}

function selectUserAction(id) {
    return {
        type: SELECT_USER,
        data: id
    }
}

export function selectUser(id){
    return(dispatch,getState)=>{
        dispatch(selectUserAction(id));
    }
}

export function getUser() {
    return(dispatch,getState)=>{
        dispatch(fetchUserAction());
        client = new HttpClient();
        client.get("https://jsonplaceholder.typicode.com/users",false)
            .then((data)=>{
                dispatch(fetchUserCompletedAction(data))
            })
            .catch((err)=>console.log(err))
    }
}