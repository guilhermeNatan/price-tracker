/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

import * as yup from "yup";

export const initialValuesCar = {
    brand: '',
    model: '',
    mileage: '',
    doors: 2,
    onlyOwner: '',
    fuel: '',
    directionType: '',
    acceptExchange: false
}
export const validationObjectCar = {

    brand: yup
        .string()
        .when(['category', 'subcategory'], {
            is: (category, subcategory) => category ===  'AUTO_E_PECAS' && subcategory ==='2020',
            then: yup.string().required('Campo obrigatório'),
            otherwise: yup.string()
        } ),
    model: yup
        .string()
        .when(['category', 'subcategory'], {
            is: (category, subcategory) => category ===  'AUTO_E_PECAS' && subcategory ==='2020',
            then: yup.string().required('Campo obrigatório'),
            otherwise: yup.string()
        } ),
    mileage: yup.number(),
    doors: yup
        .number()
        .when(['category', 'subcategory'], {
            is: (category, subcategory) => category ===  'AUTO_E_PECAS' && subcategory ==='2020',
            then: yup.number().required('Campo obrigatório'),
            otherwise: yup.number()
        } ),
    onlyOwner: yup.bool(),
    fuel: yup.string(),
    directionType:  yup.string(),
    acceptExchange:  yup.bool(),
}


