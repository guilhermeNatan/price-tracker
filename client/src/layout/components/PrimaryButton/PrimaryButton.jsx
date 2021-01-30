/*
 * Copyright (c) 2021. Crido por Guilherme Natan Barbosa Alecrim
 */

import React from 'react';
import style from './PrimaryButtonStyle';
import Button from '@material-ui/core/Button';
const PrimaryButton = ({title}) => {
    return (
        <div>
            <Button  variant="contained"
                     color="primary"
                     style={{width: '20vw',
                            height: '5vh'
                     }}
            >
                {title}
            </Button>
        </div>
    );
};


export default PrimaryButton;
