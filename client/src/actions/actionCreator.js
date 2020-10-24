import ACTION_TYPE from './actionTypes';

export const getPricesAction = (stockSymbol) => {
    return {
        type: ACTION_TYPE.GET_PRICES_ACTION,
        data: stockSymbol
    };
};

export const socketAction = dataFromSocket => ({
    type: ACTION_TYPE.SOCKETS_IO_ACTION,
    payload: {
        data: dataFromSocket,
    },
});
