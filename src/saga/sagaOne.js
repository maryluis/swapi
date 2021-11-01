import {takeEvery, put, call} from 'redux-saga/effects';
import { getOnePerson } from '../tools';
import { actionPutOneData, GET_ONE_DATA } from '../redux';

function* getOneDataWorker(action) {
    let data = yield call(() => getOnePerson(action.number));
    yield put(actionPutOneData(data));
}



function* getOneDataWatcher(){ 
    yield takeEvery(GET_ONE_DATA, getOneDataWorker); 
}



export {getOneDataWatcher, getOneDataWorker};
