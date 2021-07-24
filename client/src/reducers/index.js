import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import messageReducer from "./messageReducer";
import applicationReducer from "./applicationReducer";
/**
 * @type {Reducer<S>}
 */
const rootReducer = combineReducers({
  simplesReducer: 'simplesReducer',
  user: userReducer,
  message: messageReducer,
  applicationParams: applicationReducer
});

export default rootReducer;
