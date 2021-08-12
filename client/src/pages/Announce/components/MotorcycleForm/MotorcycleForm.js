import React, {PureComponent} from 'react';
import styles from './MotorcycleFormStyles';
import TextField from "@material-ui/core/TextField";
import {MenuItem} from "@material-ui/core";
import NumberField from "../../../../reuse-components/NumberField/NumberField";

 function MotorcycleForm({formik}) {
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
        <div style={styles.splitColumn}>
        <TextField
            id="acceptExchange"
            select
            label="Aceita troca"
            style={styles.textField}
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
          <TextField
              id="onlyOwner"
              select
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

        </div>

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
        </div>



      </>
    );
}

export default MotorcycleForm;
