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
}
