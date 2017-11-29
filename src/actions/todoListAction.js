/**
 * Created by Surajit Sarkar on 29/11/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */


import HttpClient from '../api/httpClient'

const FETCH_TODO_LIST = 'FETCH_TODO_LIST';
const FETCH_TODO_LIST_FINISHED = 'FETCH_TODO_LIST_FINISHED';

function fetchTodoListAction(id){
    return{
        type:FETCH_TODO_LIST,
        data:id
    }
}

function fetchTodoListFinishedAction(id,data) {
    return{
        type:FETCH_TODO_LIST_FINISHED,
        userId : id,
        data:data
    }
}

export function fetchTodoList(id){
    return(dispatch,getState)=>{
        const {user} = getState();
        dispatch(fetchTodoListAction(id));
        client = new HttpClient();
        client.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
            .then((data)=>{
                dispatch(fetchTodoListFinishedAction(user.selectedUserId,data))
            })
            .catch((err)=>console.log(err))
    }
}