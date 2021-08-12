/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

import * as yup from "yup";

export const initialValuesMotorcycle = {
    brand: '',
    model: '',
    mileage: '',
    onlyOwner: '',
    acceptExchange: false
}
export const validationObjectMotorcycle = {

    brand: yup
        .string()
        .when(['category', 'subcategory'], {
            is: (category, subcategory) => category ===  'AUTO_E_PECAS' && subcategory ==='2060',
            then: yup.string().required('Campo obrigatório'),
            otherwise: yup.string()
        } ),
    model: yup
        .string()
        .when(['category', 'subcategory'], {
            is: (category, subcategory) => category ===  'AUTO_E_PECAS' && subcategory ==='2060',
            then: yup.string().required('Campo obrigatório'),
            otherwise: yup.string()
        } ),
    mileage: yup.number(),
    onlyOwner: yup.bool(),
    acceptExchange:  yup.bool(),
}


