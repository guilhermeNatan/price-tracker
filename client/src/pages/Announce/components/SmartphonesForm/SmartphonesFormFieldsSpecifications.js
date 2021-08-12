/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

import * as yup from "yup";

export const initialValuesSmartphones = {
    smartphone_type: '',
    smartphone_newOrUsed: ''
}
export const validationObjectSmartphones = {

    smartphone_type: yup
        .string()
        .when(['category', 'subcategory'], {
            is: (category, subcategory) => category ===  'ELETRONICOS_E_CELULARES' && subcategory ==='3060',
            then: yup.string().required('Campo obrigatório'),
            otherwise: yup.string()
        } ),
    smartphone_newOrUsed: yup
        .string()
        .when(['category', 'subcategory'], {
            is: (category, subcategory) => category ===  'ELETRONICOS_E_CELULARES' && subcategory ==='3060',
            then: yup.string().required('Campo obrigatório'),
            otherwise: yup.string()
        } ),

}


