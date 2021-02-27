                        /*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

import axios from 'axios';
import {ACCESS_TOKEN} from "../constants/Endpoints";

axios.defaults.baseURL = 'http://localhost:8091/api/';

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, err => Promise.reject(err));


