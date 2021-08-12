import React from 'react';
import styles from './ComputersFormStyles';
import TextField from "@material-ui/core/TextField";
import {MenuItem} from "@material-ui/core";

function  ComputersForm({formik}) {
    return (
      <div style={styles.container}>
        <TextField
            id="computer_type"
            name="computer_type"
            select
            label="Tipo"
            value={formik.values.computer_type}
            onChange={formik.handleChange}
            margin="normal"
            error={formik.touched.computer_type && Boolean(formik.errors.computer_type)}
            fullWidth
        >
          {
            [
              {
                "label": "PCs e computadores",
                "value": "1"
              },
              {
                "label": "Notebook e netbook",
                "value": "2"
              },
              {
                "label": "Ipad e tablet",
                "value": "3"
              },
              {
                "label": "Impressoras e suplementos",
                "value": "4"
              },
              {
                "label": "Peças e acessórios",
                "value": "5"
              }
            ]
                .map((type) => <MenuItem value={type.value}>
                  {type.label}
                </MenuItem>)
          }
        </TextField>
      </div>
    );
  }

export default ComputersForm;
