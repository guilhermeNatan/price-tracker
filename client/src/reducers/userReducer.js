/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

import {GET_USER_DETAILS, LOGOUT} from '../actions';

const INITIAL_STATE = {}
export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_USER_DETAILS:
            return action.payload;
        case LOGOUT:
            return INITIAL_STATE;
        default:
            return state;
    }
}
