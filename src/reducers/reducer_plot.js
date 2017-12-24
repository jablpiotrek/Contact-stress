import {UPDATE_PLOT} from '../actions/actions.js';
const defaultState = null;

export default function reducerPlot(state = defaultState, action) {
    switch (action.type) {
        case UPDATE_PLOT:
            return action.payload;
        default:
            return state;
    }


}
