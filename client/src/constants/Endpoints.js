/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

const baseURL= 'public'
export const SEARCH_GAME = 'public/games/search';
export const access_token = 'accessToken';
export const AUTH = {
    auth: `${baseURL}/auth`,
    signin: `${baseURL}/auth/signin`,
    signup: `${baseURL}/auth/signup`,
    forgotpassword: `${baseURL}/auth/forgotpassword`,
    resetpassword: `${baseURL}/auth/resetpassword`,
    confirmAddressEmaill: `${baseURL}/auth/validate-email-address`

}
