import authReducer from './auth';
import { combineReducers } from 'redux';
import collectionsReducer from './collections';

const allReducers = combineReducers({
    user: authReducer,
    collection: collectionsReducer
})

export default allReducers;