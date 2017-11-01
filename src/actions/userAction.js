/**
 * Created by Surajit Sarkar on 1/11/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */
import { FETCH_USER, FETCH_USER_FINISHED } from './constants';
import HttpClient from '../api/httpClient'

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