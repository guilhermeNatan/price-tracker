/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

import ServiceUtil from "../service/ServiceUtil";
import {access_token, AUTH} from "../constants/Endpoints";

export const GET_USER_ACT = 'GET_USER_ACT';

export const getUserAct  = payload => ({
    type: GET_USER_ACT ,
    payload,
});

export const asyncSignin =  ({usernameOrEmail,  password}, onSuccess, onError) => async dispacth => {

   await ServiceUtil.makePostRequest({usernameOrEmail,  password}, `${AUTH.signin}`,
        (response) => {
            localStorage.setItem(access_token, response.data.accessToken);
            //TODO: isso deve vir do response
            dispacth(getUserAct({ usernameOrEmail, password}))
            onSuccess()
        },
       onError
    )
};


