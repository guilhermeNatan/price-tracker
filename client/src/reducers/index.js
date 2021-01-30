import {combineReducers} from 'redux';
import isMobile from './isMobile';

/**
 * @type {Reducer<S>}
 */


const rootReducer = combineReducers({
  isMobile: isMobile,
});

export default rootReducer;
