/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

import * as yup from "yup";
import _ from "lodash";
import {initialValuesProperty,
    validationObjectProperty} from '../PropertyForm/PropertyFormFieldsSpecifications'
import {initialValuesCar, validationObjectCar} from "../CarForm/CarFormFieldsSpecifications";
import {
    initialValuesMotorcycle,
    validationObjectMotorcycle
} from "../MotorcycleForm/MotorcycleFormFieldsSpecifications";
import {
    initialValuesComputers,
    validationObjectComputers
} from "../ComputersForm/ComputersFormFieldsSpecifications";
import {
    initialValuesSmartphones,
    validationObjectSmartphones
} from "../SmartphonesForm/SmartphonesFormFieldsSpecifications";

export const validationObject =  {
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
        .when('category', {
            is: (category) => !_.isEmpty(category),
            then: yup.string().required('Field is required'),
            otherwise: yup.string()
        } ),
    subcategories: yup
        .string('Sub categoria')
        .when('category', {
            is: (category) => !_.isEmpty(category),
            then: yup.string().required('Field is required'),
            otherwise: yup.string()
        } ),
    files: yup.mixed().required(),
    cep: yup
        .string('Cep')
        .required('Campo obrigatório'),
    price: yup
        .string('Preço')
        .required('Campo obrigatório'),
    showContactNumber: yup
        .boolean('Ocultar telefone')
        .required('Campo obrigatório'),

    ...validationObjectProperty,
    ...validationObjectCar,
    ...validationObjectMotorcycle,
    ...validationObjectComputers,
    ...validationObjectSmartphones
};


export const initialValues =  {
    title: '',
    description: '',
    category: null,
    subcategory: '',
    subcategories: [],
    cep: '',
    price: '',
    files: [],
    ...initialValuesProperty,
    ...initialValuesCar,
    ...initialValuesMotorcycle,
    ...initialValuesComputers,
    ...initialValuesSmartphones
};

const validationSchema = yup.object(validationObject);


export default {
    initialValues: initialValues,
    validationSchema: validationSchema,
};









