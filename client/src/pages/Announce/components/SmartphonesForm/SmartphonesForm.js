import React from 'react';
import styles from './SmartphonesFormStyles';
import TextField from "@material-ui/core/TextField";
import {MenuItem} from "@material-ui/core";
const brands = [
    {
        "label": "Iphone",
        "value": "1"
    },
    {
        "label": "Asus",
        "value": "2"
    },
    {
        "label": "Samsung",
        "value": "3"
    },
    {
        "label": "LG",
        "value": "4"
    },
    {
        "label": "Nokia",
        "value": "5"
    },
    {
        "label": "Motorola e Lenovo",
        "value": "6"
    },
    {
        "label": "Sony",
        "value": "7"
    },
    {
        "label": "Blackberry",
        "value": "8"
    },
    {
        "label": "HTC",
        "value": "9"
    },
    {
        "label": "Outras marcas",
        "value": "10"
    },
    {
        "label": "Telefones e aparelhos de fax",
        "value": "11"
    },
    {
        "label": "Acessórios",
        "value": "12"
    }
];
function  SmartphonesForm({formik}) {
    return (
      <div style={styles.container}>
        <TextField
            id="smartphone_type"
            name="smartphone_type"
            select
            label="Tipo"
            value={formik.values.smartphone_type}
            onChange={formik.handleChange}
            margin="normal"
            error={formik.touched.smartphone_type && Boolean(formik.errors.smartphone_type)}
            fullWidth
        >
          {

              brands.map((type) => <MenuItem key={type.label} value={type.value}>
                  {type.label}
                </MenuItem>)
          }
        </TextField>


          <TextField
              id="smartphone_newOrUsed"
              name="smartphone_newOrUsed"
              select
              label="Novo/Usado"
              value={formik.values.smartphone_newOrUsed}
              onChange={formik.handleChange}
              margin="normal"
              error={formik.touched.smartphone_newOrUsed && Boolean(formik.errors.smartphone_newOrUsed)}
              fullWidth
          >
              {
                  [
                      {
                          "label": "Novo",
                          "value": "1"
                      },
                      {
                          "label": "Usado",
                          "value": "2"
                      }
                  ].map((type) => <MenuItem key={type.label} value={type.value}>
                      {type.label}
                  </MenuItem>)
              }
          </TextField>
      </div>
    );
  }

export default SmartphonesForm;
