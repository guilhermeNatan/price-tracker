import {LOADING} from '../actions';

const INITIAL_STATE = {
    loading: false,
}
export default function messageReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOADING:
            return {...state, loading:  action.payload};
        default:
            return state;
    }
}
