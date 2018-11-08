import { call, takeLatest, put, all, takeEvery } from 'redux-saga/effects';
import { updateName } from '../actions/userAction';

const getHello = async () => {
    const response  = await fetch('http://www.bluecode.jp/test/api.php');
    const json = await response.json();
    return json;
}

function* requestHello(action){
    const json = yield call(getHello);
    yield put(updateName(json.message + ' by saga'));
}

const helloSagas = [
    takeLatest('GET_HELLO_BY_SAGA', requestHello),
];

export default function* rootSaga(){
    yield all([
        ...helloSagas,
    ]);
}