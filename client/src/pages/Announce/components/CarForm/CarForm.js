import React, {PureComponent} from 'react';
import styles from './CarFormStyles';
import TextField from "@material-ui/core/TextField";
import {MenuItem} from "@material-ui/core";
import NumberField from "../../../../reuse-components/NumberField/NumberField";

function CarForm({formik}) {
    return (
        <>

            <div style={styles.splitColumn}>
                <TextField
                    fullWidth
                    style={styles.textField}
                    id="brand"
                    name="brand"
                    label="Marca"
                    value={formik.values.brand}
                    onChange={formik.handleChange}
                    error={formik.touched.brand && Boolean(formik.errors.brand)}
                    helperText={formik.touched.brand && formik.errors.brand}
                />

                <TextField
                    fullWidth
                    id="model"
                    name="model"
                    label="Modelo"
                    value={formik.values.model}
                    onChange={formik.handleChange}
                    error={formik.touched.model && Boolean(formik.errors.model)}
                    helperText={formik.touched.model && formik.errors.model}
                />
            </div>

            <NumberField
                fullWidth
                id="year"
                name="price"
                label="Ano"
                value={formik.values.year}

                onChange={formik.handleChange}
                helperText={formik.touched.year && formik.errors.year}
                error={formik.touched.year && Boolean(formik.errors.year)}
                numberFormatProps={{
                    allowNegative:false,
                }}

            />

            <div style={styles.splitColumn}>
                <TextField
                    fullWidth
                    style={styles.textField}
                    id="mileage"
                    name="mileage"
                    label="Quilometragem"
                    value={formik.values.mileage}
                    onChange={formik.handleChange}
                    error={formik.touched.mileage && Boolean(formik.errors.mileage)}
                    helperText={formik.touched.mileage && formik.errors.mileage}
                />

                <TextField
                    id="doors"
                    select
                    name="doors"
                    label="Portas"
                    value={formik.values.doors}
                    onChange={formik.handleChange}
                    margin="normal"
                    error={formik.touched.doors && Boolean(formik.errors.doors)}
                    fullWidth
                >
                    <MenuItem value={2}>
                        2
                    </MenuItem>
                    <MenuItem value={4}>
                        4
                    </MenuItem>
                </TextField>
            </div>

            <div style={styles.splitColumn}>
                <TextField
                    id="onlyOwner"
                    select
                    style={styles.textField}
                    label="Único dono"
                    value={formik.values.onlyOwner}
                    onChange={formik.handleChange}
                    margin="normal"
                    error={formik.touched.onlyOwner && Boolean(formik.errors.onlyOwner)}
                    fullWidth
                >
                    <MenuItem value={true}>
                        sim
                    </MenuItem>
                    <MenuItem value={false}>
                        não
                    </MenuItem>
                </TextField>


                <TextField
                    id="fuel"
                    select
                    label="Combustível"
                    value={formik.values.fuel}
                    onChange={formik.handleChange}
                    margin="normal"
                    error={formik.touched.fuel && Boolean(formik.errors.fuel)}
                    fullWidth
                >
                    {
                        ['Gasolina', 'Ácool', 'Flex', 'Gás Natural', 'Diesel', 'Híbrido', 'Elétrico']
                            .map((fuel) => <MenuItem value={fuel}>
                                {fuel}
                            </MenuItem>)
                    }
                </TextField>
            </div>

            <div style={styles.splitColumn}>
                <TextField
                    id="directionType"
                    select
                    style={styles.textField}
                    label="Tipo de direção"
                    value={formik.values.directionType}
                    onChange={formik.handleChange}
                    margin="normal"
                    error={formik.touched.directionType && Boolean(formik.errors.directionType)}
                    fullWidth
                >
                    {
                        ['Hidrulica', 'Elétrica', 'Mecância', 'Assistida']
                            .map((directionType) => <MenuItem value={directionType}>
                                {directionType}
                            </MenuItem>)
                    }
                </TextField>


                <TextField
                    id="acceptExchange"
                    select
                    label="Aceita troca"
                    value={formik.values.acceptExchange}
                    onChange={formik.handleChange}
                    margin="normal"
                    error={formik.touched.acceptExchange && Boolean(formik.errors.acceptExchange)}
                    fullWidth
                >
                    <MenuItem value={true}>
                        sim
                    </MenuItem>
                    <MenuItem value={false}>
                        não
                    </MenuItem>
                </TextField>
            </div>
        </>
    );
}

export default CarForm;
