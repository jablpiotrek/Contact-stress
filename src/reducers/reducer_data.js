import {UPDATE_DATA} from '../actions/actions.js';

const defaultState = null;
export default function reducerData(state = defaultState, action) {
    switch (action.type) {
        case UPDATE_DATA:
            return action.payload;
        default:
            return state;
    }
}