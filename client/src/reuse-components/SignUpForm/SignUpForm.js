import React, {Component} from 'react';
import styles from './SignUpFormStyles';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as yup from "yup";
import {useFormik} from "formik";


const validationSchema = yup.object().shape({
  nome: yup
      .string('Enter your email')
      .required('Nome é obrigatório'),
  email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
  password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  confirmpassword:  yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .test('passwords-match', 'Passwords must match ya fool', function(value) {
        return this.parent.password === value;
      }),

});


export default function SignUpForm () {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return(
      <div>
        <form onSubmit={formik.handleSubmit}>
          <TextField
              fullWidth
              id="nome"
              name="nome"
              label="Nome"
              value={formik.values.nome}
              onChange={formik.handleChange}
              error={formik.touched.nome && Boolean(formik.errors.nome)}
              helperText={formik.touched.nome && formik.errors.nome}
          />
          <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
              fullWidth
              id="password"
              name="password"
              label="Senha"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
              fullWidth
              id="confirmpassword"
              name="confirmpassword"
              label="Confirmar senha"
              type="password"
              value={formik.values.confirmpassword}
              onChange={formik.handleChange}
              error={formik.touched.confirmpassword && Boolean(formik.errors.confirmpassword)}
              helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
          />

          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </div>
  );
}
