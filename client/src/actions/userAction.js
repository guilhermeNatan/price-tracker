/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

import ServiceUtil from "../service/ServiceUtil";
import {ACCESS_TOKEN, AUTH, USER} from "../constants/Endpoints";
import AuthService from "../service/AuthService";




export const GET_USER_DETAILS = 'GET_USER_DETAILS';
export const getUserDetails  = payload => ({
    type: GET_USER_DETAILS ,
    payload,
});


export const asyncGetUserDetails =  (onSuccess, onError) => async dispacth => {
    await ServiceUtil.makeGetRequest(`${USER.userDetails}`,
        (response) => {
            dispacth(getUserDetails(response.data))
            onSuccess && onSuccess()
        },
        onError
    )
};

export const LOGOUT = 'LOGOUT';
export const logout = () => {
    AuthService.logout();
    return ({
        type: LOGOUT
    })
};
