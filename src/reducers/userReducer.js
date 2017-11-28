/**
 * Created by Surajit Sarkar on 31/10/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */

import { FETCH_USER, FETCH_USER_FINISHED } from '../actions/constants';

const initialState = {
    data: [],
    isFetching: false,
    selectedUserId:-1
};

export default function peopleReducer(state = initialState, action) {
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
        default:
            return state;
    }
}
