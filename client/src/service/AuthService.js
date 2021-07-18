/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

import ServiceUtil from "./ServiceUtil";
import {ACCESS_TOKEN, AUTH} from "../constants/Endpoints";

export default class AuthService {

    static signin =  async ({usernameOrEmail,  password}, onSuccess, onError) =>
        await ServiceUtil.makePostRequest({usernameOrEmail,  password}, `${AUTH.signin}`,
            (response) => {
                localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
                onSuccess()
            },
            onError
        )

    static signup =  async (values, onSuccess, onError) =>
        await ServiceUtil.makePostRequest(values, `${AUTH.signup}`,
            (response) => {
                localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
                onSuccess()
            },
            onError
        )

    static logout = () => localStorage.removeItem(ACCESS_TOKEN);
}
