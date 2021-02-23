/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

import * as yup from "yup";
import axios from "../../config/AxiosConfig";
import {AUTH} from "../../constants/Endpoints";

const validationSchema = yup.object({
    usernameOrEmail: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});


export default {
    initialValues: {
        usernameOrEmail: '',
        password: '',
    },
    validationSchema: validationSchema,
};



