/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

const publicUrl= 'public'
export const SEARCH_GAME = 'public/games/search';
export const ACCESS_TOKEN = 'troca-vendas-cap';

export const AUTH = {
    auth: `${publicUrl}/auth`,
    signin: `${publicUrl}/auth/signin`,
    signup: `${publicUrl}/auth/signup`,
    forgotpassword: `${publicUrl}/auth/forgotpassword`,
    resetpassword: `${publicUrl}/auth/resetpassword`,
    confirmAddressEmaill: `${publicUrl}/auth/validate-email-address`

}

export const USER = {
    userDetails: 'user/me'
}
