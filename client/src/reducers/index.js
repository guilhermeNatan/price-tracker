import {combineReducers} from 'redux';
import userReducer from "./userReducer";
/**
 * @type {Reducer<S>}
 */
const rootReducer = combineReducers({
  simplesReducer: 'simplesReducer',
  user: userReducer
});

export default rootReducer;
