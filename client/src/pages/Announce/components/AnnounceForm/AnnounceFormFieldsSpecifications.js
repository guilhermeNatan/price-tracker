/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

import * as yup from "yup";


const validationSchema = yup.object({
    title: yup
        .string('Título')
        .required('Campo obrigatório'),
    description: yup
        .string('Descrição')
        .required('Campo obrigatório'),
    category: yup
        .string('Categoria')
        .required('Campo obrigatório'),
    subcategory: yup
        .string('Sub categoria')
        .required('Campo obrigatório'),
    subcategories: yup
        .string('Sub categoria'),
    files: yup.mixed().required(),
    cep: yup
        .string('Cep')
        .required('Campo obrigatório'),
    hidePhone: yup
        .boolean('Ocultar telefone')
        .required('Campo obrigatório'),
});


export default {
    initialValues: {
        title: '',
        description: '',
        category: null,
        subcategory: null,
        subcategories: [],
        cep: '',
        files: []
    },
    validationSchema: validationSchema,
};






