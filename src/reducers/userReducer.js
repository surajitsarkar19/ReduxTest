/**
 * Created by Surajit Sarkar on 31/10/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */

import { FETCH_USER, FETCH_USER_FINISHED } from '../actions/constants';

/***
 *
 * [
     {
         "id": 1,
         "name": "Leanne Graham",
         "username": "Bret",
         "email": "Sincere@april.biz",
         "address": {
             "street": "Kulas Light",
             "suite": "Apt. 556",
             "city": "Gwenborough",
             "zipcode": "92998-3874",
             "geo": {
                 "lat": "-37.3159",
                 "lng": "81.1496"
             }
         },
         "phone": "1-770-736-8031 x56442",
         "website": "hildegard.org",
         "company": {
             "name": "Romaguera-Crona",
             "catchPhrase": "Multi-layered client-server neural-net",
             "bs": "harness real-time e-markets"
         }
     },
 ]
 */

const initialState = {
    data: [],
    isFetching: false
}

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
                data:action.data.map((item,index)=>({key:index,ssid:item})),
                isFetching:false
            };
        default:
            return state;
    }
}
