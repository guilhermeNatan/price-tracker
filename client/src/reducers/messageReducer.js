import {CLOSSE_MESSAGE_ACT, SHOW_MESSAGE_ACT} from '../actions';

const INITIAL_STATE = {
    showMessage: false,
    type: '',
    text: ''
}
export default function messageReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SHOW_MESSAGE_ACT:
            return action.payload;
        case CLOSSE_MESSAGE_ACT:
            return INITIAL_STATE;
        default:
            return state;
    }
}
