/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

import { GET_USER_ACT} from '../actions';

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case GET_USER_ACT:
            return action.payload;
        default:
            return state;
    }
}
