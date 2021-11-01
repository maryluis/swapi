import {takeEvery, put, call} from 'redux-saga/effects';
import { getPersons } from '../tools';
import { actionPutData, GET_DATA } from '../redux';

function* getDataWorker(action) {
    let data = yield call(() => getPersons(action.page));
    yield put(actionPutData(data));
}



function* getDataWatcher(){ 
    yield takeEvery(GET_DATA, getDataWorker); 
}



export {getDataWatcher, getDataWorker};
