import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import messageReducer from "./messageReducer";
/**
 * @type {Reducer<S>}
 */
const rootReducer = combineReducers({
  simplesReducer: 'simplesReducer',
  user: userReducer,
  message: messageReducer
});

export default rootReducer;
