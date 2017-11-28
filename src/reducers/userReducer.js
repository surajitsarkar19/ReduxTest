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

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                data:[],
                isFetching:true
            };
        case FETCH_USER_FINISHED:
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
        case SELECT_USER:
            return{
                ...state,
                selectedUserId:action.data
            };
        default:
            return state;
    }
}
