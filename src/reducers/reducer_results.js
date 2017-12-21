import {APPEND_RESULT, CLEAR_RESULTS} from '../actions/actions.js';

const defaultState = [];
export default function reducerResults(state = defaultState, action) {
    switch(action.type) {
        case APPEND_RESULT:
            return [action.payload, ...state];

        case CLEAR_RESULTS:
            return [];
        default:
            return state;
    }
}
