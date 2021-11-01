import {all} from 'redux-saga/effects';
import createSagaMiddleware from "redux-saga";
import {getDataWatcher} from "./sagaData";
import { getOneDataWatcher } from "./sagaOne"


function* rootSaga(){ 
    yield all([
        getDataWatcher(),
        getOneDataWatcher()
    ])
}



const SagaMiddleware = createSagaMiddleware();


export {SagaMiddleware, rootSaga};