import {takeLeading} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import { getPricesSaga } from './pricesSagas';

function* rootSaga() {
    yield  takeLeading(ACTION.GET_PRICES_ACTION, getPricesSaga);
}

export default rootSaga;
