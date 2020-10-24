import {put} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import {connect} from '../utils';

export function* getPricesSaga(action) {
    try {
        yield connect(action.data);

        // yield put({type: ACTION.GET_PRICES_ACTION}, data: data);
    } catch (e) {
        yield put({type: ACTION.GET_PRICES_ERROR, error: e.response});
    }
}
