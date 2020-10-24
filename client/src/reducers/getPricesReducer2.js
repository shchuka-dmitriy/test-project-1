import produce from 'immer';
import ACTION from '../actions/actionTypes';

const initialState = {
    prices: null,
    isFetching: true,
    error: null
};

function webSocketReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_PRICES_ACTION: {
            const {
                payload: { data },
            } = action;

            const nextState = produce(state, draftState => {
                draftState.data = data;
            });

            return {...state, nextState};
        }

        case ACTION.GET_PRICES_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error
            };
        }
        default: {
            return state;
        }
    }
}

export default webSocketReducer;
