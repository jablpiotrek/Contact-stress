import { combineReducers } from 'redux';
import reducerData from './reducer_data.js';
const reducers = combineReducers({
    data: reducerData
});
export default reducers;