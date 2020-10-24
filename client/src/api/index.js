import io from 'socket.io-client';
import {socketAction} from '../actions/actionCreator';

const baseURL = 'ws://localhost:4000/api';

class WebSocketAPI {
    #store = null;
    #socket = null;

    constructor(store) {
        this.#socket = io(baseURL);
        this.#store = store;
        this.#socket.on('connect', this.actionHandler);
    }

    actionHandler(data) {
        this.#store.dispatch(socketAction(data));
    }
}

export function createWebSocket(store) {
    return new WebSocketAPI(store);
}
