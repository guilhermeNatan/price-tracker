import React from 'react';
import TextField from "@material-ui/core/TextField";

export const ForgotPasswordForm = ({formik }) => {

  return (
      <>
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

      </>
  );

}
