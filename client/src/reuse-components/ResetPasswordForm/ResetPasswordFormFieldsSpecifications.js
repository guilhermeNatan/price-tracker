/*
 * Copyright (c) 2021. Criado por Guilherme Natan Barbosa Alecrim
 */

import * as yup from "yup";


const validationSchema = yup.object().shape({
    newPassword: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    confirmNewPassword:  yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .test('passwords-match', 'Passwords must match ya fool', function(value) {
            return this.parent.newPassword === value;
        }),

});


export default {
    initialValues: {
        newPassword: '',
    },
    validationSchema: validationSchema,

};



