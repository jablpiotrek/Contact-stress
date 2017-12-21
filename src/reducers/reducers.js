import { combineReducers } from 'redux';
import reducerData from './reducer_data.js';
import reducerResults from './reducer_results.js';
const reducers = combineReducers({
    data: reducerData,
    results: reducerResults
});
export default reducers;
