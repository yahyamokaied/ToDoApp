import { createStore, combineReducers } from 'redux';
import todoReducer from './reducers';

const rootReducer = combineReducers({
    todo: todoReducer,
});

export default store = createStore(rootReducer);