/**
 * Created by Surajit Sarkar on 31/10/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */

import { FETCH_USER, FETCH_USER_FINISHED, SELECT_USER } from '../actions/userAction';

const initialState = {
    data: [],
    isFetching: false,
    selectedUserId:-1
};

function onFetchUser(state, action) {
    return {
        ...state,
        data:[],
        isFetching:true
    };
}

function onUserFetchFinished(state, action) {
    return {
        ...state,
        data:action.data.map((item,index)=>{
            return{
                key:item.id,
                ...item
            }
        }),
        isFetching:false
    };
}

function onSelectUser(state, action) {
    return{
        ...state,
        selectedUserId:action.data
    };
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER:
            return onFetchUser(state,action);
        case FETCH_USER_FINISHED:
            return onUserFetchFinished(state,action);
        case SELECT_USER:
            return onSelectUser(state,action);
        default:
            return state;
    }
}
