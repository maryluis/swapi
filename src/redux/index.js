import {createStore, combineReducers, applyMiddleware} from 'redux';
import { dataReducer, actionGetData, actionPutData, GET_DATA, PUT_DATA } from './dataReducer';
import { rootSaga, SagaMiddleware } from '../saga';
import { dataOnePerson, actionGetOneData, actionPutOneData, GET_ONE_DATA, PUT_ONE_DATA} from './dataOnePerson';

const store = createStore(combineReducers({
    data: dataReducer,
    onePerson: dataOnePerson,
}), applyMiddleware(SagaMiddleware));

SagaMiddleware.run(rootSaga);


export {store, dataReducer, actionPutData, actionGetData, GET_DATA, PUT_DATA, GET_ONE_DATA, PUT_ONE_DATA, actionPutOneData, actionGetOneData};