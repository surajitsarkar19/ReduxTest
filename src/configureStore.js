/**
 * Created by Surajit Sarkar on 31/10/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */
import { applyMiddleware, createStore } from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from './reducers'

export default function configureStore() {
    const logger = createLogger();
    const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
    let store = createStoreWithMiddleware(rootReducer);
    //let store = createStore(rootReducer)
    return store
}