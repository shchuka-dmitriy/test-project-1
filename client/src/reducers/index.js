import { combineReducers } from 'redux';
import getPricesReducer2 from './getPricesReducer2';

const createRootReducer = () => combineReducers({
    pricesStore: getPricesReducer2
});

export default createRootReducer;
