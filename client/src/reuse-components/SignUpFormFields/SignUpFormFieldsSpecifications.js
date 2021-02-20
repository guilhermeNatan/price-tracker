/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

import * as yup from "yup";
import axios from "../../config/AxiosConfig";
import {AUTH} from "../../constants/Endpoints";

const validationSchema = yup.object().shape({
    nome: yup
        .string('Enter your email')
        .required('Nome é obrigatório'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    confirmpassword:  yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .test('passwords-match', 'Passwords must match ya fool', function(value) {
            return this.parent.password === value;
        }),

});

export const signupRequest = (onSuccess = console.log('sucess'), onError) => async  (values) => {
    try{
        const respo = await  axios.post(`${AUTH.signup}`, values);
        onSuccess(respo);
    }catch (error) {
        onError(error)
    }
}
export default (onSubmit) => ({
    initialValues: {
        email: '',
        password: '',
    },
    validationSchema: validationSchema,
    onSubmit,
});



