import React from 'react';
import TextField from '@material-ui/core/TextField';


export const LoginForm = ({formik }) => {

  return (
      <>

          <TextField
              fullWidth
              id="usernameOrEmail"
              name="usernameOrEmail"
              label="Email"
              value={formik.values.usernameOrEmail}
              onChange={formik.handleChange}
              error={formik.touched.usernameOrEmail && Boolean(formik.errors.usernameOrEmail)}
              helperText={formik.touched.usernameOrEmail && formik.errors.usernameOrEmail}
          />
          <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
          />

      </>
  );

}
