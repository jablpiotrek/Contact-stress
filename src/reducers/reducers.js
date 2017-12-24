import { combineReducers } from 'redux';
import reducerData from './reducer_data.js';
import reducerResults from './reducer_results.js';
import reducerPlot from './reducer_plot.js';
const reducers = combineReducers({
    data: reducerData,
    results: reducerResults,
    plot: reducerPlot
});
export default reducers;
