import React from 'react';
import {
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Radio,
    RadioGroup
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import NumberField from "../../../../reuse-components/NumberField/NumberField";

function PropertyForm({formik }) {
    return (
        <>
            <NumberField
                fullWidth
                id="cepImovel"
                name="cepImovel"
                label="CEP do imóvel"
                value={formik.values.cepImovel}
                onChange={formik.handleChange}
                helperText={formik.touched.cepImovel && formik.errors.cepImovel}
                error={formik.touched.cepImovel && Boolean(formik.errors.cepImovel)}
                numberFormatProps={{format: '#####-###'}}

            />

            <TextField
                fullWidth
                id="enderecoImovel"
                name="enderecoImovel"
                label="Endereço do imóvel"
                value={formik.values.enderecoImovel}
                onChange={formik.handleChange}
                error={formik.touched.enderecoImovel && Boolean(formik.errors.enderecoImovel)}
                helperText={formik.touched.enderecoImovel && formik.errors.enderecoImovel}
            />

            <FormControl component="fieldset"  error={formik.touched.tipoOferta && Boolean(formik.errors.tipoOferta)} >
                <FormLabel component="legend">Tipo de Oferta </FormLabel>
                <RadioGroup aria-label="tipoOferta" name="tipoOferta" value={formik.values.tipoOferta}    onChange={formik.handleChange}>
                    <FormControlLabel value="vendo" control={<Radio />} label="Vendo" />
                    <FormControlLabel value="alugo" control={<Radio />} label="Alugo" />
                </RadioGroup>
                <FormHelperText>{formik.touched.tipoOferta && formik.errors.tipoOferta}</FormHelperText>
            </FormControl>
        </>
    );
}

export default PropertyForm;
