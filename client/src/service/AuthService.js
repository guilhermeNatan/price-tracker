/*
 * Copyright (c) 2021. Criado por Guilherme Natan Barbosa Alecrim
 */

import ServiceUtil from "./ServiceUtil";
import {ACCESS_TOKEN, AUTH} from "../constants/Endpoints";

export default class AuthService {

    static signin = async ({values, onSuccess, ...props}) =>
        await ServiceUtil.makePostRequest({
                values,
                url: `${AUTH.signin}`,
                onSuccess: (response) => {
                    localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
                    onSuccess()
                },
                ...props
            }
        )

    static signup = async ({values, onSuccess, ...props}) =>
        await ServiceUtil.makePostRequest({
                values,
                url: `${AUTH.signup}`,
                onSuccess: (response) => {
                    localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
                    onSuccess()
                },
                ...props
            }
        )

    static  forgotPassword = async ({values, ...props}) =>
        await ServiceUtil.makePostRequest({
                values, url: `${AUTH.forgotpassword}`,
                ...props
            }
        );

    static  resetPassword = async ({values, onSuccess, ...props}) =>
        await ServiceUtil.makePostRequest({
                values, url: `${AUTH.resetpassword}`,
                onSuccess: (resp) => {
                    localStorage.removeItem(ACCESS_TOKEN)
                    onSuccess(resp)
                },
                props
            }
        );

    static logout = () => localStorage.removeItem(ACCESS_TOKEN);
}
