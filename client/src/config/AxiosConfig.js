                        /*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:8091/api/'

});



 export default instance;
