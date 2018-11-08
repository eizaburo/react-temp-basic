import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/saga';

export default createStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = reduxCreateStore(
        combineReducers({
            userData: userReducer,
        }),
        applyMiddleware(
            thunk,
            sagaMiddleware,
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
}