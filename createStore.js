import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';

export default createStore = () => {
    const store = reduxCreateStore(
        combineReducers({
            userData: userReducer,
        }),
        applyMiddleware(
            thunk,
        )
    );
    return store;
}