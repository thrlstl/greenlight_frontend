import authReducer from './auth';
import collectionReducer from './collection';
import collectionsReducer from './collections';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    user: authReducer,
    collections: collectionsReducer,
    collection: collectionReducer,
})

export default allReducers;