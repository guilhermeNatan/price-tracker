/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

import * as yup from "yup";

export const initialValuesComputers = {
    computer_type: '',
}
export const validationObjectComputers = {

    computer_type: yup
        .string()
        .when(['category', 'subcategory'], {
            is: (category, subcategory) => category ===  'ELETRONICOS_E_CELULARES' && subcategory ==='3040',
            then: yup.string().required('Campo obrigatório'),
            otherwise: yup.string()
        } ),

}


