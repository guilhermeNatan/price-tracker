/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

import * as yup from "yup";

export const initialValuesProperty = {
    tipoOferta: '',
    enderecoImovel: '',
    cepImovel: ''
}
export const validationObjectProperty = {

    tipoOferta: yup
        .string('Tipo de Anuncio')
        .when('category', {
            is: (category) => category === 'IMOVEIS',
            then: yup.string().required('Field is required'),
            otherwise: yup.string()
        } ),
    enderecoImovel: yup
        .string('Endereço do imóvel ')
        .when('category', {
            is: (category) => category === 'IMOVEIS',
            then: yup.string().required('Field is required'),
            otherwise: yup.string()
        } ),
    cepImovel: yup
        .string('CEP do imóvel ')
        .when('category', {
            is: (category) => category === 'IMOVEIS',
            then: yup.string().required('Field is required'),
            otherwise: yup.string()
        } ),
}

