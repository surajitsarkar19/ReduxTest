/**
 * Created by Surajit Sarkar on 29/11/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */

import {FETCH_TODO_LIST,FETCH_TODO_LIST_FINISHED} from '../actions/todoListAction';

/***
 * {
	"userId": {
		"isFetching": false,
		"data": [{
				"id": 1,
				"userId": 1,
				"title": "delectus aut autem",
				"completed": false
			},
			{
				"userId": 1,
				"id": 2,
				"title": "quis ut nam facilis et officia qui",
				"completed": false
			}
		]
	}
}
 */

const initialState={};

function onFetchTodoList(state, action) {
    let newState = {...state};
    let todoList = newState[action.userId];
    if(todoList){
        todoList.isFetching = true;
    }
    return newState;
}

function onTodoListFetchFinished(state, action){
    let newState = {...state};
    if(action.userId !== -1){
        let newObj={};
        newObj["data"] = action.data.map((item,index)=>{
            return{
                key:item.id,
                ...item
            }
        });
        newObj["isFetching"] = false;
        newState[action.userId] = newObj;
    }
    return newState;
}

export default function (state = initialState, action) {
    switch (action.type){
        case FETCH_TODO_LIST:
            return onFetchTodoList(state,action);
        case FETCH_TODO_LIST_FINISHED:
            return onTodoListFetchFinished(state,action);
        default:
            return state;
    }
}