/**
 * Created by Surajit Sarkar on 29/11/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */

import {FETCH_TODO_LIST,FETCH_TODO_LIST_FINISHED} from '../actions/todoListAction';

const initialState={

};

export default function (state = initialState, action) {
    switch (action.type){
        case FETCH_TODO_LIST_FINISHED:
            let newState = {...state};
            if(action.userId !== -1){
                newState[action.userId] = action.data;
            }
            return newState;
        default:
            return state;
    }
}